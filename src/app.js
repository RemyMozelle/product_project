import express from "express";
import index from "./routes/index";

const app = express();

app.use("/", index);

app.listen(3001);
