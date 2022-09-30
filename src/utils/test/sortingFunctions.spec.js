//This is just an example of unit testing. It does not cover the whole app, but it shows a little bit what can be done.
import { expect, test } from '@jest/globals';
import { compareHeight, compareMass, compareNames } from '../sortingFunctions.js';
import { personFixtureA, personFixtureB } from './fixtures/person.fixtures.js';

describe('sorting Functions unit tests', () => {
  describe.each([
    {
      describe: 'compareNames',
      compareMethod: compareNames,
    },
    {
      describe: 'compareHeight',
      compareMethod: compareHeight,
    },
    {
      describe: 'compareMass',
      compareMethod: compareMass
    }
  ])('$describe', ({compareMethod}) => {
    test.each([
      {
        test: `Should return 1 when a > b`,
        expected: 1,
        a: personFixtureA,
        b: personFixtureB
      },
      {
        test: `Should return -1 when a < b `,
        expected: -1,
        a: personFixtureB,
        b: personFixtureA
      },
      {
        test: `Should return 0 when a == b`,
        expected: 0,
        a: personFixtureA,
        b: personFixtureA
      }
    ])('$test', ({expected, a, b}) => {
      //When
      const result = compareMethod(a,b)
      //Then
      expect(result).toEqual(expected)
    })
  })
})