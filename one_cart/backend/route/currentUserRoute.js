import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getAdmin, getCurrentUser } from "../controller/currentUserController.js";
import { adminAuth } from "../middleware/adminAuth.js";


const currentRoutes = express.Router();

// 🔧 This is accessed with GET /api/user/current (not /use)
currentRoutes.get("/current", isAuth, getCurrentUser);

// 🔐 Admin-only access: GET /api/user/current/admin
currentRoutes.get("/current/admin", adminAuth, getAdmin);

export default currentRoutes;
