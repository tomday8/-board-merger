# BOARDmerger

A simple CLI to support merging of boards from within a directory into a single output. 

## Description

If you're regularly faced with the challenge of collating boards spread across multiple files into a single output then BOARDmerger is here to simplify the process.

Given a directorym BOARDmerger can identify any boards and return a single JSON output, sorted by vendor then name for your convenience.
Additional metadata is appended, with the number of vendors and boards.


BOARDmerger works with the following board structure:
```json
{
  "boards": [
    {
      "name": "string",
      "vendor": "string",
      "core": "string",
      "has_wifi": boolean
    }
  ]
}
```

## Getting Started

### Prerequisites

You'll need `Node.js` and `npm` (or yarn) installed.
For more information, see the [npm documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).


### Installation

1. Clone the repository:
```
git clone https://github.com/tomday8/board-merger.git
cd board-merger
```

2. Install dependencies:
```
npm install
```

### Building

To compile the Typescript into Javascript:
```
npm run build
```


### Running

To run BOARDmerger once the application is built:
```
node ./dist/cliProgram.js -m </path/to/directory>
```

**NOTE**  
It's also possible to install BOARDmerger globally using:
```
npm install -g
```

This enables running the program using the `boardmerger` command:
```
boardmerger -m </path/to/directory>
```


**NOTE**  
The above examples include specifying the directory path.
Omitting the path will instead use the current working directory.


## Additional Information

### Development Notes

This CLI was developed as a solution to a take home assessment.
The granular commit history is designed to reflect the development process.
In a production environment, a number of commits would be combined, and later consolidated based on team conventions.

### Assumptions

A number of assumptions were been made during the development of BOARDmerger, including:

* The output doesn't need saving to a new file.
* The program should exit in case of any errors (such as incomplete boards and JSON syntax errors).
* The source directory will not contain duplicate boards.


### Future Improvements

To enhance the usability of BOARDmerger there are a number of possible improvements, including:

* Add functionality to save the output.
* Accept multiple directory paths.
* Require input from the user to proceed with using the pwd/cwd.
* Enhance error support and feedback.
* Provide an option to include incomplete boards.
* Provide an option to filter any duplicate boards.


### Resources

This section details some of the resources used during development.

**Building TypeScript CLIs**

* https://blog.logrocket.com/building-typescript-cli-node-js-commander/
* https://www.npmjs.com/package/commander

**Node.js File Paths**

* https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths

**Testing**

* https://devhints.io/jest
* https://jestjs.io/docs/mock-function-api

**Other**

* https://www.geeksforgeeks.org/node-js-process-cwd-method/


