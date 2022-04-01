/**
 * Created by Jzy on .2022年3月24日上午9:44:21 
 */
// const cache = require("../../lib/cache");
const cache = require("../../src/cache");

test("base", () => {
  let memoize= cache.memoize(
    function add(a,b){
      return  a+ b
    },

    key=>key)

    expect(
    memoize(1,2)
    ).toEqual(3);
});


test("async", () => {
  let memoize= cache.memoizeAsync(
    function add(a,b, callback){
      let c =  a+ b
      setTimeout(callback, c ,2000)
    },
    key=>key
  )

    expect(
        memoize(1,2,function callback(data){
          console.log('result',data)
        })
    )
});


