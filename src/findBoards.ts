import { readFileSync } from "fs";

export function findBoards(filepath: any) {
    const fileData = readFileSync(filepath);

    return (fileData) ? "File received!" : "No file!";
}