import { Request, Response } from "express";
import restaurantModel from "../models/restaurant.model";
import base64Photos from "../utils/base64Photos";

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await restaurantModel.find({});
    res.json(restaurants);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

interface Ifile {
  path: string;
}

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const { photos, title, desc, open_time, close_time, location, status } =
      req.body;
    const photo_paths = [];
    if (photos) {
      for (let i = 0; i < photos.length; i++) {
        const path = await base64Photos(photos[i]);
        photo_paths.push(path);
      }
    }
    const new_rest = {
      title,
      desc,
      open_time,
      close_time,
      photos: photo_paths,
      status,
      latLng: {
        type: "Point",
        coordinates: location
          ?.trim()
          .replace(/ /g, "")
          .split(",")
          .map((coord: any) => parseFloat(coord)),
      },
    };
    const restaurant = await restaurantModel.create(new_rest);
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

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const res_id = req.params.restaurantId;
    await restaurantModel.updateOne(
      { _id: res_id },
      {
        $push: { menu: req.body },
      }
    );

    res.status(201).send({ message: "created" });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const res_id = req.params.restaurantId;
    const menu_id = req.params.menuId;

    const menu = req.body;
    let setObj: any = {};
    Object.keys(menu).map((key) => (setObj[`menu.$.${key}`] = menu[key]));
    await restaurantModel.updateOne(
      { _id: res_id, "menu._id": menu_id },
      {
        $set: setObj,
      }
    );
    res.status(200).send({ message: "updated" });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};
export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const res_id = req.params.restaurantId;
    const menu_id = req.params.menuId;

    await restaurantModel.updateOne(
      { _id: res_id },
      {
        $pull: { menu: { _id: menu_id } },
      }
    );
    res.status(200).send({ message: "deleted" });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};
