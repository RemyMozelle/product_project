import express from "express";
import index from "./routes/index";
import createSequelize from "./database/db";

const sequelize = createSequelize();
const app = express();

app.use("/", index);

app.listen(3001);
