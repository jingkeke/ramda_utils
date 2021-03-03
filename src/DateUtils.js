import moment from "dayjs";
import "dayjs/locale/zh-cn.js";

moment.locale("zh-cn");
/**
     *   before use momentJs 
    // return moment().utcOffset(480).format(format); //解决 Moment 格式化时间出现时区差的问题
     * @param {*} format 
     */
export function currentday(format = "YYYY-MM-DD HH:mm:ss") {
  // dayjs timezone ref https://day.js.org/docs/zh-CN/plugin/timezone#docsNav
  // var utc = require('dayjs/plugin/utc') // dependent on utc plugin
  // var timezone = require('dayjs/plugin/timezone')
  // dayjs.extend(utc)
  // dayjs.extend(timezone)
  return moment().format(format);
}

export function formatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
  return moment(date).format(format);
}

/**
 * 返回年/月/周/  的第一天日期
 * ref http://momentjs.cn/docs/#/manipulating/start-of/
 * @param date
 * @param format
 */
function getStart(date, start = "week", format = "MM-DD") {
  // moment().utcOffset(480).startOf('week');
  return formatDate(moment(date).startOf("week"), format);
}

export function getWeekStart(date, format = "MM-DD") {
  return getStart(date, "week", format);
}
/**
 * 两数相i18nToChinesei18nToChinese减
 * https://github.com/iamkun/moment/blob/dev/docs/en/API-reference.md#subtract-subtractvalue-number-unit-string
 * @param {*} date1
 * @param {*} date2
 * @param {*} unit
 */
export function dateMinus(date1, date2, unit = "hour") {
  const date11 = moment(date1);
  const date22 = moment(date2);
  return date11.diff(date22, unit); // 7
}
// 测试这样才是东八区得.........  const startTime = DateUtils.formatDate(DateUtils.daysBefore(hour, 'hour'), 'YYYY-MM-DDTHH:mm:ssZ')

export function daysBefore(num, unit = "day") {
  //   return   moment().utcOffset(480).subtract(num, unit)
  return moment().subtract(num, unit);
}

/**
 * ref https://www.cyanhall.com/cn/cheatsheet/18.javascript-date-time-cheatsheet/
 * type days weeks months
 */
/**
 *
 * @param {*} number
 * @param {*} unit   days: weeks: months
 * @param {*} beginDate
 */
export function daysAddByNum(num, unit = "days", beginDate) {
  if (beginDate) {
    return moment(beginDate).add(num, unit);
  }
  return moment().add(num, unit);
}

export function daysSubtractByNum(num, unit = "days", beginDate) {
  if (beginDate) {
    return moment(beginDate).subtract(num, unit);
  }

  return moment().subtract(num, unit);
} // load on demand
// moment.locale('zh-cn') // locale globally
export function i18nToChinese(date, format = "MMM") {
  return moment(date).locale("zh-cn").format(format); // locale in a specific instance
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (!time) {
    return null;
  }
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time *= 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
  return time_str;
}

// ios 低版本 转换 "2021-03-03T09:39:30.000+0000" 这种时间有问题
//
//
function jianrongLowIOS(dateString) {
  // return new Date(dateString)
  let time = json.content_created_time.replace(/-/g, "/");
  time = time.replace(/T/g, " ");
  time = time.substring(0, 19);
  return new Date(time);
}
