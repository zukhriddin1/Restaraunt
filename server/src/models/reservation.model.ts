import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
import { ExitStatus } from "typescript";

export enum EStatus {
  pending = "pending",
  canceled = "canceled",
  confirmed = "confirmed",
}

export interface IReservation {
  restaurant_id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  reserve_time: number;
  people_count: number;
  note?: string;
  status: EStatus.pending | EStatus.canceled | EStatus.confirmed;
}

const reservatinSchema = new Schema<IReservation>(
  {
    restaurant_id: {
      type: Schema.Types.ObjectId,
      ref: "restaurant",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    reserve_time: Date,
    people_count: Number,
    note: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const reservationModel = mongoose.model<IReservation>(
  "reservation",
  reservatinSchema
);

export default reservationModel;
