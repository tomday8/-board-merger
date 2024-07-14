import { findBoards } from "../src/findBoards";

describe("findBoards function", () => {
    it("receives a file path as input", () => {
        // Given
        const testFilePath = "./tests/data/example-boards.json";

        // When
        const result = findBoards(testFilePath);

        // Then
        expect(result).toBe("File received!")
    })
})