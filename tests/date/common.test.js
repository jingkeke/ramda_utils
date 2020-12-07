/**
 * Created by Jzy on 2019/7/6 09
 */
const date = new Date();
// DATE
const dateOptions = {
  year: "numeric",
};

 const year = date.toLocaleDateString("en-US", dateOptions)
const dateU = require('../../src/DateUtils');
test('week first date ',()=>{
    expect(dateU.currentday('YYYY')).toBe(year)
})
test('时区问题 ',()=>{
    console.log(dateU.currentday())
})
test("add num ",()=>{
  const day = dateU.daysAddByNum(2,'days',new Date('2020-12-07'))
  
  expect( dateU.formatDate(day,'YYYY-MM-DD')   ).toBe('2020-12-09')
  })
  test('i18n',()=>{
    const day = dateU.daysAddByNum(2,'days',new Date('2020-12-07'))
   expect(dateU.i18nToChinese(day)).toBe('12月') 
  
  })
  