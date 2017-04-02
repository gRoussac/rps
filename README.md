# rps
Rock - Paper - Scissors

## Installation

Run `npm install` (in package directory, no arguments) [npmjs](https://docs.npmjs.com/cli/install).

## Start

Run `npm start` will start by default a game of 1000 rounds [npmjs](https://docs.npmjs.com/cli/start).

Use the `-- -r, --rounds` flag for playing another number of match rounds.

Caution : the end of the options delimiter -- is important.

Ex : `npm start -- -r 5000`.

## Build

Run `npm run build` to build via [Gulp].

Run `npm run build-watch` to run buildgit gui on file change.

## Running unit tests

Run `npm test` to execute the unit tests via [Mocha](https://mochajs.org/#getting-started).

Run `npm test-watch` to run tests on file change.