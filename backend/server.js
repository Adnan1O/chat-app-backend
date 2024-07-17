import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import mongoose from "mongoose";
import cors from "cors"
dotenv.config();

const __dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
	origin: 'http://localhost:3000', 
	credentials: true 
}));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	const mongoUrl = "mongodb+srv://adnn4u:CYQL4kbVpy7P9G2x@wethink-chat.jtlsxjw.mongodb.net/?retryWrites=true&w=majority&appName=wethink-chat"
	console.log(mongoUrl)
	mongoose.connect(mongoUrl)
	.then(()=>console.log("connected to mongodb"))
	.catch((err)=>console.log("connection failed", err))
	console.log(`Server Running on port ${PORT}`);
});
