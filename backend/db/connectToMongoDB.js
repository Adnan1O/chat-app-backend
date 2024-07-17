import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		const mongo = process.env.MONGO_DB_URI
		console.log(mongo)
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
