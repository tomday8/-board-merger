import { Board } from "./types";

export function boardMerger(boardArray: Board[]): Board[] {
    if (boardArray.length === 0) {
        return boardArray;
    }

    for (const board of boardArray) {
        if (board.name === "" || board.vendor === "" || board.core === "") {
            // TODO: Create a custom error e.g. EmptyStringError
            throw new Error("Board detected with empty fields!");
        }
    }

    const inputSortedByVendorThenName: Board[] = boardArray.sort(
        (boardA, boardB) => {
            const vendorComparison = boardA.vendor.localeCompare(boardB.vendor);
            if (vendorComparison !== 0) {
                return vendorComparison;
            } else {
                return boardA.name.localeCompare(boardB.name);
            }
        }
    );
    return inputSortedByVendorThenName;
}

export function convertBoardsToJson(boardArray: Board[]): string {
    const outputJson = {
        boards: boardMerger(boardArray),
    }
    return JSON.stringify(outputJson, null, 2);
}
