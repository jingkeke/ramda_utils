import dayjs from 'dayjs';

export function currentday(format = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(new Date()).format(format);
}

export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(date).format(format);
}

/**
 * 返回年/月/周/  的第一天日期
 * ref http://momentjs.cn/docs/#/manipulating/start-of/
 * @param date
 * @param format
 */
function getStart(date, start = 'week', format = 'MM-DD') {
    dayjs(new Date()).startOf('week');

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
export function dateMinus(date1,date2,unit='hour'){

        const date11 = dayjs(date1)
        const date22 = dayjs(date2)
        return date11.diff(date22, unit) // 7
    }

export  function daysBefore(num,unit='day') {
  return   dayjs(new Date()).subtract(num, unit)
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
    if (!time) {
        return null
    }
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}
