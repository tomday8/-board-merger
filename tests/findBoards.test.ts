import { findBoards } from "../src/findBoards";

describe("findBoards function", () => {
    let originalConsoleLog = console.log;
    let capturedOutput = "";

    beforeEach(() => {
        originalConsoleLog = console.log;
        console.log = jest.fn((output) => {
            capturedOutput += output;
        });
    });

    afterEach(() => {
        console.log = originalConsoleLog;
        capturedOutput = "";
    });

    it("receives a directory path as input", () => {
        // Given
        const directoryPath = "./tests/data";

        // When,Then
        expect(() => findBoards(directoryPath)).not.toThrow();
    })

    it("confirms when there's no boards in input", () => {
        // Given
        const testFilePath = "./tests/data/noValidBoards";
        const expectedOutput = "No boards identified!"

        // When
        findBoards(testFilePath);

        // Then
        expect(capturedOutput).toEqual(expectedOutput);
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
        findBoards(testFilePath);

        // Then
        expect(capturedOutput).toEqual(jsonOutput);
    })
})
