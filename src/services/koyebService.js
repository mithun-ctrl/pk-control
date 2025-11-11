import axios from "axios";
import Config from "../config/envVariable.js";
export const triggerRedeploy = async (useCache) => {
    const url = `https://app.koyeb.com/v1/services/${Config.KOYEB_SERVICE_ID}/redeploy`;
    
    const reponse = await axios.post(
        url,
        {use_cache: useCache},
        {
            headers: {
                Authorization: `Bearer ${Config.KOYEB_API_TOKEN}`,
                "Content-Type": "application/json",
            },
        }
    );

    return reponse.data;
};
