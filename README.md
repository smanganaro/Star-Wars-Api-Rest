# Star-Wars-Api-Rest

The goal of this project is to consume and manipulate API data with pagination and sorting.

Specifications:

- Uses Express framework to set up the server.
- The API exposes two endpoints:

  1. `:/people?sortBy=mass` endpoint. Returns a list of people. sortBy allowed values: "name", "height" or "mass".
  2. `:/planets` endpoint. Returns a list of planets with residents names.

## Installation and Initialization

1. Clone the project
2. inside run `npm install`
3. inside run `npm start`

## Unit tests

1. run `npm test`

## Things to consider

- Sorting has only one direction
- Pushing .env file for simplicity of configuration. It should be ignored.
- There is a single branch and the repository does not work with pull requests since it was not asked.
- There are improvements to be done: unit testing, error handling and logging in this example are just a glimpse of what it can be done. Since these topics were not part of the goals, there was no focus on them. Also missing functional testing.
