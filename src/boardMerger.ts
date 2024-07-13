import { Board } from "./types";

export function boardMerger(boardArray: Board[]) {
    return boardArray.sort((boardA, boardB) => boardA.vendor.localeCompare(boardB.vendor));
}
