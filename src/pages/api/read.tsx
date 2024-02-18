import csvToJson from "../utils/readfile";

export default async function handler(req: any, res: any) {
  try {
    const jsonData = await csvToJson("./public/result.csv");
    res.status(200).json(jsonData);
  } catch (error) {
    console.error("Error reading CSV file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
