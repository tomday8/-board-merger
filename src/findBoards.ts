import { readFileSync, readdirSync } from "fs";
import { convertBoardsToJson } from "./boardMerger";
import path from "path";
import { Board } from "./types";

export function findBoards(directoryPath: string) {
    const files: string[] = readdirSync(directoryPath).filter(
        (files) => path.extname(files) === ".json");
    const allBoards: Board[] = [];

    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const fileData = readFileSync(filePath);
        const jsonData = JSON.parse(fileData.toString());
        if (jsonData.boards) {
            allBoards.push(...jsonData.boards);;
        }
    }

    let mergedJsonOutput;
    if (allBoards.length > 0) {
        mergedJsonOutput = convertBoardsToJson(allBoards);
    }

    return (mergedJsonOutput) ? mergedJsonOutput : "No boards identified!";
}
