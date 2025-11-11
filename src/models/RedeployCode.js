import mongoose from "mongoose";

const redeployCodeSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("RedeployCode", redeployCodeSchema);