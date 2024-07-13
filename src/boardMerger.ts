import { Board } from "./types";

export function boardMerger(boardArray: Board[]) {
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
