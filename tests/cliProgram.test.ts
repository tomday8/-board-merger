import { outputJsonBoards } from "../src/cliProgram";
import { findBoards } from "../src/findBoards";

jest.mock("../src/findBoards")

describe('outputJsonBoards function', () => {
    it('calls findBoards with the provided path', () => {
        // Given
        const directoryPath = "/path/to/file";
        const mockFindBoards = jest.mocked(findBoards);

        // When
        outputJsonBoards(directoryPath);
    
        // Then
        expect(mockFindBoards).toHaveBeenCalledWith(directoryPath);
      });
})
