import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
env.config();

// run consumer for listening for emails queue
import "./rabitmq/consumer.js";

// routes
import login from "./routes/login/login.js";
import register from "./routes/register/register.js";
import user from "./routes/user/user.js";

const port = process.env.PORT | 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// middlewares
app.use("/api/v1/login", login);
app.use("/api/v1/register", register);
app.use("/api/v1/user", user);

app.get("/api/v1", (req, res) => {
	res.json({ status: "Up and running" });
});

mongoose.connect(process.env.MONGODB_URI, () => {
	console.log("Successfuly connected with database");
});

// server listening
app.listen(port, () => console.log(`Server is up and running on ${port}`));
