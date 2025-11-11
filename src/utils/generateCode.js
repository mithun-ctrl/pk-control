import RedeployCode from "../models/RedeployCode.js";
import mongoose from "mongoose";

const generateCode = (length = 12) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

const createCodes = async (count = 5) => {
  try {
    await mongoose.connect("mongodb+srv://itsmithun:mithunxyadav@cluster0.youmv.mongodb.net/pk-control?retryWrites=true&w=majority&appName=Cluster0");
    console.log("📦 Connected to database");
    
    const codes = Array.from({ length: count }, () => ({ 
      code: generateCode() 
    }));
    
    await RedeployCode.insertMany(codes);
    console.log("✅ Generated codes:", codes.map(c => c.code));
    
  } catch (error) {
    console.error("❌ Error generating codes:", error.message);
  } finally {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
      console.log("🔌 Database connection closed");
    }
    process.exit();
  }
};

createCodes(5);