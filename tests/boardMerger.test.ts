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

    it("returns the input array sorted by vendor then name", () => {
        // Given
        const inputArray: Board[] = [
            {
                name: "C BoardName",
                vendor: "A Vendor",
                core: "Core-1",
                has_wifi: true,
            },
            {
                name: "BoardName",
                vendor: "B Vendor",
                core: "Core-2",
                has_wifi: false,
            },
            {
                name: "A BoardName",
                vendor: "A Vendor",
                core: "Core-1",
                has_wifi: true,
            },
            {
                name: "B BoardName",
                vendor: "A Vendor",
                core: "Core-2",
                has_wifi: false,
            },
        ];
        const outputArray: Board[] = [
            {
                name: "A BoardName",
                vendor: "A Vendor",
                core: "Core-1",
                has_wifi: true,
            },
            {
                name: "B BoardName",
                vendor: "A Vendor",
                core: "Core-2",
                has_wifi: false,
            },
            {
                name: "C BoardName",
                vendor: "A Vendor",
                core: "Core-1",
                has_wifi: true,
            },
            {
                name: "BoardName",
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

    it("accepts and returns an empty array", () => {
        // Given
        const emptyInput: Board[] = [];
    
        // When
        const result = boardMerger(emptyInput);
    
        // Then
        expect(result).toEqual([]);
    });
    
    it("will throw an error with missing fields in input", () => {
        // Given
        const inputWithEmptyName: Board[] = [
            {
                name: "",
                vendor: "A Vendor",
                core: "Core-1",
                has_wifi: true,
            },
        ];
        const inputWithEmptyVendor: Board[] = [
            {
                name: "A Name",
                vendor: "",
                core: "Core-1",
                has_wifi: true,
            },
        ];
        const inputWithEmptyCore: Board[] = [
            {
                name: "A Name",
                vendor: "A Vendor",
                core: "",
                has_wifi: true,
            },
        ];
    
        // When,Then
        expect(() => boardMerger(inputWithEmptyName)).toThrow();
        expect(() => boardMerger(inputWithEmptyVendor)).toThrow();
        expect(() => boardMerger(inputWithEmptyCore)).toThrow();
    });
});
