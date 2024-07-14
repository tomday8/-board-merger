import { readFileSync } from "fs";
import { findBoards } from "../src/findBoards";

describe("findBoards function", () => {
    it("receives a file path as input", () => {
        // Given
        const testFilePath = "./tests/data/example-boards.json";

        // When,Then
        expect(() => findBoards(testFilePath)).not.toThrow();
    })

    it("returns json from reading the file", () => {
        // Given
        const testFilePath = "./tests/data/example-boards.json";
        const expectedResult = JSON.parse(readFileSync(testFilePath, "utf8"));

        // When
        const result = findBoards(testFilePath);

        // Then
        expect(result).toEqual(expectedResult)
    })
})
