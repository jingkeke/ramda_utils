'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepclone = deepclone;
exports.inverObj = inverObj;
exports.isNil = isNil;
exports.isEmpty = isEmpty;
exports.isNotNil = isNotNil;
exports.isNotEmpty = isNotEmpty;
exports.getObjectVariables = getObjectVariables;
exports.merge = merge;

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function deepclone(obj) {
  return R.clone(obj);
}

function inverObj() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return R.invertObj(obj);
}
function isNil(obj) {
  return R.isNil(obj);
}

function isEmpty(obj) {
  return R.isEmpty(obj);
}
function isNotNil(obj) {
  return !R.isNil(obj);
}

function isNotEmpty(obj) {
  return !R.isNil(obj) && !R.isEmpty(obj);
}

function getObjectVariables(vars, themeVariables) {
  return R.pick(vars)(themeVariables);
}
function merge(added, obj) {
  return R.merge(added)(obj);
}