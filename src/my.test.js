let a = 123;

a = [];

a.push(2);



const arrayU = require("./ArrayUtils");

test("安装字段i是否相等,合并对象数组", () => {
  expect(
    arrayU.mergeArrayValu(
      [{ i: 2, added: "haha" }],
      [
        { i: 2, origin: "aa" },
        { i: 1, origin: "aa" },
      ]
    )
  ).toEqual([
    { i: 2, origin: "aa", added: "haha" },
    { i: 1, origin: "aa" },
  ]);
});
