import express from "express";
import { login } from "../controller/user.controller";

const userRoutes = express.Router();

// userRoutes.get("/");
userRoutes.post("/login", login);

export default userRoutes;
