import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import redeployRoutes from "./routes/redeployRoutes.js";
import Config from "./config/envVariable.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/redeploy", redeployRoutes);

app.get("/", (req, res) => res.send("PK-Deploy Backend is Running ✅"));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${Config.PORT}`)
);