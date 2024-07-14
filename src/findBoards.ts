import { readFileSync } from "fs";
import { Board } from "./types";
import { convertBoardsToJson } from "./boardMerger";

export function findBoards(filepath: string) {
    const fileData = readFileSync(filepath);
    const jsonData = JSON.parse(fileData.toString());
    const allBoards: Board[] = [];
    let mergedJsonOutput;

    if (jsonData.boards) {
        allBoards.push(...jsonData.boards);
        mergedJsonOutput = convertBoardsToJson(allBoards);
    }

    return (mergedJsonOutput) ? mergedJsonOutput : "No boards identified!";
}