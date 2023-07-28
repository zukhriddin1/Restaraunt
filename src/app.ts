import express from "express";
import restaurantRoutes from "./routes/restaurant.routes";
import reservationRoutes from "./routes/reservation.routes";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes";
import auth from "./middleware/auth";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/restaurants", auth, restaurantRoutes);
app.use("/reservations", reservationRoutes);
app.use("/user", userRoutes);
export default app;
