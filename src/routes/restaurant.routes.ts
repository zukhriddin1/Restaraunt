import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  updateRestaurant,
} from "../controllers/restaurant.controller";
const restaurantRoutes = express.Router();

restaurantRoutes.get("/", getRestaurant);
restaurantRoutes.post("/", createRestaurant);
restaurantRoutes.patch("/:id", updateRestaurant);
restaurantRoutes.delete("/:id", deleteRestaurant);

export default restaurantRoutes;
