import * as express from "express";
import { userService } from "../services";

export const userRoutes = express.Router();

userRoutes.get("/api/v1/users", (req, res) => {
  const users = userService.getUsers();
  res.json(users);
});

userRoutes.get("/api/v1/users/:id", (req, res) => {
  const users = userService.getUser(req.params.id);
  res.json(users);
});
