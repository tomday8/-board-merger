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
        try {
            const fileData = readFileSync(filePath);
            const jsonData = JSON.parse(fileData.toString());
            if (jsonData.boards) {
                allBoards.push(...jsonData.boards);;
            }
        } catch (error) {
            if (error instanceof SyntaxError) {
                console.error(`Invalid JSON syntax in file: ${filePath}`, error);
            } else {
                console.error(`Error reading file: ${filePath}`, error);
            }
        }
    }

    if (allBoards.length > 0) {
        const mergedJsonOutput = convertBoardsToJson(allBoards);
        console.log(mergedJsonOutput);
    } else {
        console.log("No boards identified!");
    }
}
