import express from "express";
import bodyParser from "body-parser";
import categories from "./routes/categories";
import products from "./routes/products";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/categories", categories);
app.use("/products", products);
app.listen(3001);
