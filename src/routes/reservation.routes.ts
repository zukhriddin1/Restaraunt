import express from "express";
import {
  createReservation,
  getReservation,
} from "../controller/reservation.controller";

const reservationRoutes = express.Router();

reservationRoutes.get("/", getReservation);
reservationRoutes.post("/", createReservation);

export default reservationRoutes;
