import { Board } from "../src/types";
import { boardMerger } from "../src/boardMerger"

describe("boardMerger function", () => {
    // it("accepts and returns a Board", () => {
    //     // Given
    //     const exampleBoard: Board = {
    //         name: "BoardName",
    //         vendor: "A Vendor",
    //         core: "Core-1",
    //         has_wifi: true,
    //     };

    //     // When
    //     const result = boardMerger(exampleBoard);

    //     // Then
    //     expect(result).toBe(exampleBoard);
    // });

    it("accepts and returns an array of Boards", () => {
        // Given
        const inputArray: Board[] = [
            {
                name: "BoardName1",
                vendor: "A Vendor 1",
                core: "Core-1",
                has_wifi: true,
            },
            {
                name: "BoardName2",
                vendor: "A Vendor 2",
                core: "Core-2",
                has_wifi: false,
            },
        ];
    
        // When
        const result = boardMerger(inputArray);
    
        // Then
        expect(result).toBe(inputArray);
    });

    it("returns the input array sorted by vendor", () => {
        // Given
        const inputArray: Board[] = [
            {
                name: "BoardName1",
                vendor: "B Vendor",
                core: "Core-2",
                has_wifi: false,
            },
            {
                name: "BoardName2",
                vendor: "A Vendor",
                core: "Core-1",
                has_wifi: true,
            },
        ];
        const outputArray: Board[] = [
            {
                name: "BoardName2",
                vendor: "A Vendor",
                core: "Core-1",
                has_wifi: true,
            },
            {
                name: "BoardName1",
                vendor: "B Vendor",
                core: "Core-2",
                has_wifi: false,
            },
        ];
    
        // When
        const result = boardMerger(inputArray);
    
        // Then
        expect(result).toEqual(outputArray);
    });
});
