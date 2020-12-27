import * as express from "express";
import { productRoutes } from "./libs/routes/ProductRoutes";
import { userRoutes } from "./libs/routes/UserRoutes";

export const app = express();

app.use(express.json());

app.use(userRoutes);

app.use(productRoutes);
