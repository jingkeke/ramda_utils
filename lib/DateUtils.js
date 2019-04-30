'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentday = currentday;
function currentday() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD HH:mm:ss';

  return dayjs().format(format);
}