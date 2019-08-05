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
