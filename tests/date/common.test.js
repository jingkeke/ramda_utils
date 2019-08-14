/**
 * Created by Jzy on 2019/7/6 09
 */
const dateU = require('../../src/DateUtils');
test('week first date ',()=>{
    expect(dateU.currentday('YYYY')).toBe('2019')
})
