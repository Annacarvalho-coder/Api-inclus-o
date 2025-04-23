import express from "express";
import accessiblePlaces from "../data/accessiblePlaces.js";
import tips from "../data/tips.js";
import resources from "../data/resources.js";

const router = express.Router();

router.get("/places", (req, res) => {
  res.json(accessiblePlaces);
});

router.get("/tips", (req, res) => {
  res.json(tips);
});

router.get("/resources", (req, res) => {
  res.json(resources);
});

export default router;
