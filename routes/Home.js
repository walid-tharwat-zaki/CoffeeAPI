import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to coffee task API");
});

export default router;
