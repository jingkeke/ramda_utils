/**
 * Created by Jzy on 2019/7/6 09
 */
const dateU = require('../../src/DateUtils');

const date = new Date();
// DATE
const dateOptions = {
  year: "numeric",
};

 const year = date.toLocaleDateString("en-US", dateOptions)
test('currentday format',()=>{
    expect(dateU.currentday('YYYY')).toBe(year)
})
