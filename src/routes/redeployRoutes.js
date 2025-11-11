import express from "express";
import { redeploy } from "../controllers/redeployController.js";

const router = express.Router();

router.post("/cache", redeploy);
router.post("/fresh", redeploy);

export default router;