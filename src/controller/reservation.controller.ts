import express, { Request, Response } from "express";
import reservationModel, {
  EStatus,
  IReservation,
} from "../models/reservation.model";
import { customRequest } from "../middleware/auth";

export const getReservation = async (req: Request, res: Response) => {
  try {
    const reservations = await reservationModel.find({});
    res.json(reservations);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const createReservation = async (req: Request, res: Response) => {
  try {
    const { restaurant_id, reserve_time, people_count, note } = req.body;
    const new_reservation: IReservation = {
      restaurant_id,
      reserve_time,
      people_count,
      note,
      user_id: (req as customRequest).userId,
      status: EStatus.pending,
    };
    const create = await reservationModel.create(new_reservation);
    res.send(create);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};
