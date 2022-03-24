/**
 * Created by Jzy on 2019/9/3 09
 */
const cache = require("../../lib/cache");

test("安装字段i是否相等,合并对象数组", () => {
let memoize= cache.memoize(
  function add(a,b){
    return  a+ b
  },

  key=>key)

  expect(
  memoize(1,2)
  ).toEqual(3);
});

