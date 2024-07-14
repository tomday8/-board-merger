import { readFileSync } from "fs";
import { JsonableValue } from "ts-jest";

export function findBoards(filepath: any) {
    const fileData = readFileSync(filepath);
    const jsonData = JSON.parse(fileData.toString());

    return (jsonData) ? jsonData : "No file!";
}