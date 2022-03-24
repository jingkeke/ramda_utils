import { curry } from "ramda";

test("test  curry", () => {
  const get = curry(function getProper(property, obj) {
    return obj[property];
  });

  expect(get("name")({ name: 1234 })).toEqual(1234);
});
