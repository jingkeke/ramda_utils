/**
 * 2021-02-15 Created by Jzy on
 * 
 */
const functionaMethods = require("../../src/functional/index");

const { map } = functionaMethods;

// import { map} from '../../src/functional/index'
const testData = [0, 1, 2];
test("realize  map function ", () => {
  expect(map((n) => n * 2, testData)).toEqual([0, 2, 4])
});
