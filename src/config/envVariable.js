import { configDotenv } from "dotenv";
configDotenv();

const Config = {
    "MONGODB_URI": process.env.MONGODB_URI,
    "PORT": process.env.PORT,
    "KOYEB_API_TOKEN": process.env.KOYEB_API_TOKEN,
    "KOYEB_SERVICE_ID": process.env.KOYEB_SERVICE_ID
}
export default Config;