import { Request, Response } from "express";
import restaurantModel from "../models/restaurant.model";

export const getRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurants = await restaurantModel.find({});
    res.json(restaurants);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await restaurantModel.create(req.body);
    res.json(restaurant);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const restaurant = await restaurantModel.updateOne({ _id: id }, req.body);
    res.json(restaurant);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const restaurant = await restaurantModel.deleteOne({ _id: id });
    res.json(restaurant);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const crateMenuItem = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};
