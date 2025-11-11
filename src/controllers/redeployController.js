import RedeployCode from "../models/RedeployCode.js";
import DeployLog from "../models/DeployLog.js";
import { triggerRedeploy } from "../services/koyebService.js";

export const redeploy = async (req, res) => {
  const { code } = req.body;
  const useCache = req.path.includes("cache");

  if (!code)
    return res.status(400).json({ status: "error", message: "Code required" });

  try {
    const found = await RedeployCode.findOne({ code });
    if (!found)
      return res.status(403).json({ status: "error", message: "Invalid code" });

    const koyebResponse = await triggerRedeploy(useCache);

    await DeployLog.create({
      code,
      type: useCache ? "cache" : "fresh",
      status: "success",
      message: "Redeployment triggered successfully",
    });

    res.json({
      code,
      status: "success",
      message: "Redeployment triggered successfully",
      deployment_id: koyebResponse.deployment?.id || "unknown",
    });
  } catch (err) {
    console.error(err);
    await DeployLog.create({
      code,
      type: useCache ? "cache" : "fresh",
      status: "failed",
      message: err.message,
    });
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
