import {sum} from "../src/sum";

describe('sum', () => {
    it('adds two numbers', () => {
        // Given
        const inputOne: number = 1;
        const inputTwo: number = 2;

        // When
        const result: number = sum(inputOne, inputTwo);

        // Then
        expect(result).toBe(3);
    });
});
