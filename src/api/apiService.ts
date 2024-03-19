import ApiData from "../json/ai-data.json"
import { AiData } from "../types/AiData";


export const fetchAiData = async (): Promise<AiData> => {
  try {
    console.log(ApiData)
    return ApiData;
  } catch (error) {
    console.error('Error fetching AI data:', error);
    throw error;
  }
};
