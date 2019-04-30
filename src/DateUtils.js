import dayjs from 'dayjs';

export function currentday(format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs().format(format);
}
