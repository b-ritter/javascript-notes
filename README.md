# javascript-notes
Just some javascript miscellany. Please take a look at the test cases associated with file to glean the point of the example. Mostly, the code here deals with concepts related to the language itself, not really how it behaves in the browser.

## Requirements
You need to have [node]('https://nodejs.org/en/') and [npm]('https://www.npmjs.com/') installed. 

## Installation
Run `npm install` in the root directory to install the required packages. 

## Usage
You can do `node somemodule.js` to just run the file and see the output. To run tests, go to the root directory and run `npm test`.

## Recommendations
Install mocha globally with `npm install --global mocha`. Then you can easily run unit tests on individual files. For example, in `example-module`, you can run `mocha .` and it will run all the tests in that directory.