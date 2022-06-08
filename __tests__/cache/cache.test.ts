/**
 * 看完jest实践指南  obsidiant 2022年6月8日15:03:36
 * Created by Jzy on .2022年3月24日上午9:44:21 
 */
// const cache = require("../../lib/cache");
// const cache = require("../../src/cache");
import * as cache from "../../src/cache";

describe('cache', () => {

  it("base", () => {
    let memoize = cache.memoize(
      function add(a, b) {
        return a + b
      },

      key => key)

    expect(
      memoize(1, 2)
    ).toEqual(3);
  });


  it("async", () => {
    let memoize = cache.memoizeAsync(
      function add(a, b, callback) {
        let c = a + b
        setTimeout(callback, c, 2000)
      },
      key => key
    )

    expect(
      memoize(1, 2, function callback(data) {
        console.log('result', data)
      })
    )
  });



})