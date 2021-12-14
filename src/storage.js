/**
 * 设置cookie
 * @param {*} c_name
 * @param {*} value
 * @param {*} expiredays
 */
export function setCookie(c_name, value, expireSeconds) {
  var exdate = new Date();
  exdate.setTime(exdate.getTime() + expireSeconds * 1000);
  document.cookie =
    c_name +
    "=" +
    escape(value) +
    (expireSeconds == null ? "" : ";expires=" + exdate.toGMTString());
}

/**
 * 获取cookie
 * @param {*} c_name
 */
export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      returnunescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}
