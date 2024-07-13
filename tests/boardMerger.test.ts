import { Board } from "../src/types";
import { boardMerger } from "../src/boardMerger"

describe("boardMerger function", () => {
    it("accepts and returns a Board", () => {
        // Given
        const exampleBoard: Board = {
            name: "BoardName",
            vendor: "A Vendor",
            core: "Core-1",
            has_wifi: true,
        };

        // When
        const result = boardMerger(exampleBoard);

        // Then
        expect(result).toBe(exampleBoard);
    });
});
