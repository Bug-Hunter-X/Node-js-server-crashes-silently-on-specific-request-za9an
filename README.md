# Node.js Server Crash Bug

This repository demonstrates a bug where a Node.js HTTP server crashes without providing any error messages when processing a specific request. The server functions correctly for other requests but terminates unexpectedly for this particular one.

## Bug Description

A Node.js server unexpectedly crashes upon receiving a specific request.  No error messages are logged to the console, making debugging difficult. The cause of the crash is not immediately apparent and might be subtle, for example unhandled exception inside a callback.

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Send the problematic request to the server (details may vary depending on the specific cause of the bug).

## Solution

The solution involves identifying the root cause of the crash (e.g., using debugging techniques, or logging potential errors and adding exception handling where necessary). A detailed solution is provided in the file `serverSolution.js`

## Technologies Used

- Node.js
- HTTP