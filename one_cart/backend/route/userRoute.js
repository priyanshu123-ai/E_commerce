import express from "express";
import { adminLogin, googleLogin, login, logout, register } from "../controller/user.controller.js";
import { sendEmail } from "../utils/nodemailer.js";

const userRoutes = express.Router();

// Auth routes
userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/logout", logout);
userRoutes.post("/googlelogin", googleLogin);
userRoutes.post("/adminLogin",adminLogin)
userRoutes.post("/mail",sendEmail)

export default userRoutes;
