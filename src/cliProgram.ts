#! /usr/bin/env node

import { findBoards } from "./findBoards";
import { Command } from "commander";
import figlet from "figlet";

const program = new Command();

console.log(figlet.textSync("BOARDmerger"));

program
    .version("1.0.0")
    .description("Merge your JSON boards together using BOARDmerger.")
    .option("-m, --mergeboards [value]",
        "merges any boards identified in JSON files in the directory path provided, " +
        "uses current working directory (cwd/pwd) if no directory provided")
    .parse(process.argv);

const options = program.opts();

export function outputJsonBoards(directoryPath: string) {
    try {
        findBoards(directoryPath);
    } catch (error) {
        console.error(`Error occurred while reading the directory: ${directoryPath}`, error);
    }
}

if (options.mergeboards) {
    const directoryPath =
        typeof options.mergeboards === "string" ? options.mergeboards : process.cwd();
    outputJsonBoards(directoryPath);
}

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
