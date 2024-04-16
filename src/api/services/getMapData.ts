import axios, { AxiosResponse } from "axios";

const apiUrl =
  "https://ec.europa.eu/agrifood/api/cereal/prices?productCodes=DUR&memberStateCodes=EL&marketCodes=ALEX,%20BOE,%20DRA,%20EVROSA,%20GRE,%20IOAN,KAR,%20KAV,%20KIL,%20KOM,%20KOZ,%20LAR,%20LEI%20,%20MES,%20ORE,%20PYR,%20SER,%20THE&beginDate=06/10/2023&endDate=10/04/2024";
// Define the type for your response data
interface ResponseData {
  // Define the structure of your response data
  // For example, if your response data is an array of objects with a 'name' property:
  // name: string;
  // You can add more properties as needed
}

export async function fetchMapData(): Promise<ResponseData> {
  try {
    const response: AxiosResponse<ResponseData> = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    // Handle errors
    throw new Error("Error fetching data: " + error);
  }
}
