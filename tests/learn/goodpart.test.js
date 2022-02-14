const tailCall = require( "../../learn/LearnFromGoodPartJavascript/tailCall");
// const tailCall = require( "../../src/functional/tailCall");
//
const {fabric} = tailCall

test("proper tail call", () => {
  console.debug("debug:: 😈","goodpart.test.js",":", "7" , "11:16 AM",  tailCall )
  expect(fabric(2)).toEqual(3)
});
