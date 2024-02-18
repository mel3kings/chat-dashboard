import fs from "fs";
import csv from "csv-parser";

interface CSVRow {
  [key: string]: string;
}

const csvToJson = (csvFilePath: string): Promise<CSVRow[]> => {
  const jsonArray: CSVRow[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (data: CSVRow) => jsonArray.push(data))
      .on("end", () => {
        resolve(jsonArray);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export default csvToJson;
