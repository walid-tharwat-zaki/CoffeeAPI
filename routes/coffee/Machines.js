import express from "express";
import MachineController from "../../controllers/MachineController.js";
const router = express.Router();

router.get("/", MachineController.getMachines);
export default router;
