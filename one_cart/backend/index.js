import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./route/userRoute.js";
import currentRoutes from "./route/currentUserRoute.js";
import database from "./utils/database.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173","http://localhost:5174"], // your frontend port
  credentials: true
}));

// Connect DB
database();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/user", currentRoutes); // '/use' is intentional if that's what you meant

// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
