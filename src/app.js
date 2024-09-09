import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// jkhn e middleware use krar drkr hbe tkhn e app.use() lagbe
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
// array of accecpted urls. * for all acception
app.use(express.json({ limit: "16kb" }));
// json file limited asbe
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// url thk data asle setake encoded krte hoy. extended means object er vitore object ashe
app.use(express.static("public"));
// jei file e sob upload hbe
app.use(cookieParser());
// cookies crud krar jnno

// Routes

import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
export { app };
