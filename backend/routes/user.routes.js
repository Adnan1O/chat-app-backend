import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import { UserDetails } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/user-details/:id", UserDetails, );

export default router;
