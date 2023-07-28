import mongoose, { Schema } from "mongoose";

export interface IRestaurant {
  title: string;
  desc: string;
  open_time: string;
  close_time: string;
  photos: string;
  rating: number;
  address: string;
  latLeng: {
    type: string;
    coordinates: [number, number];
  };
}

const restaurantSchema = new Schema<IRestaurant>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: String,
    open_time: String,
    close_time: String,
    photos: [String],
    rating: Number,
    address: String,
    latLeng: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
  },
  {
    timestamps: true,
  }
);

const restaurantModel = mongoose.model<IRestaurant>(
  "restaurant",
  restaurantSchema
);

export default restaurantModel;
