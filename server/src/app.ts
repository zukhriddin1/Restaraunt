import express from "express";
import restaurantRoutes from "./routes/restaurant.routes";
import multer from "multer";
import reservationRoutes from "./routes/reservation.routes";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes";
import auth from "./middleware/auth";
import reviewRouter from "./routes/review.routes";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));

app.use(cookieParser());
app.use("/restaurant", restaurantRoutes);
app.use("/reservations", auth, reservationRoutes);
app.use("/review", auth, reviewRouter);
app.use("/user", userRoutes);
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
export default app;
