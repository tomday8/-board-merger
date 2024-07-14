import { readFileSync } from "fs";
import { findBoards } from "../src/findBoards";

describe("findBoards function", () => {
    it("receives a directory path as input", () => {
        // Given
        const directoryPath = "./tests/data";

        // When,Then
        expect(() => findBoards(directoryPath)).not.toThrow();
    })

    it.skip("returns json from reading the file", () => {
        // Given
        const testFilePath = "./tests/data";
        const expectedResult = JSON.parse(readFileSync(testFilePath, "utf8"));

        // When
        const result = findBoards(testFilePath);

        // Then
        expect(result).toEqual(expectedResult)
    })

    it("confirms when there's no boards in input", () => {
        // Given
        const testFilePath = "./tests/data/noValidBoards";

        // When
        const result = findBoards(testFilePath);

        // Then
        expect(result).toEqual("No boards identified!")
    })

    it("outputs correct json from input file", () => {
        // Given
        const testFilePath = "./tests/data/validBoards";
        const jsonOutput = JSON.stringify(
            {
                "boards": [
                    {
                        "name": "B7-400X",
                        "vendor": "Boards R Us",
                        "core": "Cortex-M7",
                        "has_wifi": true
                    },
                    {
                        "name": "Low_Power",
                        "vendor": "Tech Corp.",
                        "core": "Cortex-M0+",
                        "has_wifi": false
                    }
                ],
                "_metadata": {
                    "total_vendors": 2,
                    "total_boards": 2
                }
            }
            , null, 2)

        // When
        const result = findBoards(testFilePath);

        // Then
        expect(result).toEqual(jsonOutput);
    })
})
