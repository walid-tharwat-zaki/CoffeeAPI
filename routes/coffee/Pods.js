import express from "express";
import PodController from "../../controllers/PodController.js";
const router = express.Router();

router.get("/", PodController.getPods);
export default router;
