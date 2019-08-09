import dayjs from 'dayjs';

export function currentday(format = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs().format(format);
}

/**
 * 返回年/月/周/  的第一天日期
 * ref http://momentjs.cn/docs/#/manipulating/start-of/
 * @param date
 * @param format
 */
function getStart(date, start = 'week', format = 'MM-DD') {
    dayjs().startOf('week');

}

export function getWeekStart(date, format = 'MM-DD') {
    return getStart(date, 'week', format)
}
/**
 * 两数相减
 * https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#subtract-subtractvalue-number-unit-string
 * @param {*} date1 
 * @param {*} date2 
 * @param {*} unit 
 */
export function dateMinus(date1,date2,unit){

    const date11 = dayjs(date1)
    const date22 = dayjs(date2) 
   return  date1.diff(date2, 'hours') // 7
}