import express from "express";
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from "../controllers/favoriteControllers.js";

const router = express.Router();

router.get("/get/:user", getFavorites);
router.post("/add", addFavorite);
router.delete("/delete/:favoriteId/:user", deleteFavorite);

export default router;
