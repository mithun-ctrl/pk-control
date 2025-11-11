import mongoose from "mongoose";
import Config from "./envVariable.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(Config.MONGODB_URI);
        console.log("Databse connected successfully!");
    } catch (error) {
        console.log("ongoDB Connection Failed:", error);        
        process.exit(1);
    }
}