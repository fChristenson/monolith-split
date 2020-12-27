import * as express from "express";
import { productService } from "../services";

export const productRoutes = express.Router();

productRoutes.get("/api/v1/products", (req, res) => {
  const products = productService.getProducts();
  res.json(products);
});

productRoutes.get("/api/v1/products/:id", (req, res) => {
  const products = productService.getProduct(req.params.id);
  res.json(products);
});

productRoutes.get("/api/v1/products/:id/offer", (req, res) => {
  const offer = productService.getOffer(req.params.id);
  res.json(offer);
});
