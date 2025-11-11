import mongoose from "mongoose";

const deployLogSchema = new mongoose.Schema({
  code: { type: String, required: true }, // identifies which code triggered it
  type: { type: String, enum: ["cache", "fresh"], required: true },
  status: { type: String, enum: ["success", "failed"], default: "success" },
  message: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("DeployLog", deployLogSchema);