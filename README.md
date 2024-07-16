# Log Parser

The objective of this project is to parse a log file containing HTTP requests and to report on its contents.

## Installation

This project requires **Node.js v20.15.1**. For installation details, please follow the steps on [Node.js](https://nodejs.org/en/download/package-manager) according to your operating system.

> **Note**<br>
> The following commands to **install dependecies**, **run** the app and **run** the tests, need to be executed from a command line prompt/terminal, and located into the folder where you cloned this project.

Once node is installed, execute the following command:

```sh
npm install
```

The above will install the dependencies required.

## Run

Once the packages are installed, execute the following command to run the program:

```sh
npm start
```

The results will be output in the command line prompt/terminal.

## Test

In order to run the tests, execute the following command:

```sh
npm test
```

The above will start the test suite, and will output the results in the command line prompt/terminal.

## Assumptions and considerations

- A line of the [log file](datasource/programming-task-example-data.log) is only considered if it contains an IP address and information about the URL (path and status code).
- The top 3 most active IP addresses were determined as the 3 IP addresses that appear the most in the log file.
- The top 3 most visited URLs only include URLs with status 2xx.
- Some cases in the test suite are more complex than others (i.e. checking for expection, types and so forth). There is still room to keep improving the test suite.
- I decided to implement the solution in plain js, nevertheless, most of the type details could be covered using typescript.
