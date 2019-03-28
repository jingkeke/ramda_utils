'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqBy = uniqBy;
exports.mergeWith = mergeWith;
exports.unionWith = unionWith;
exports.arrFind = arrFind;
exports.getRequireAttributesArr = getRequireAttributesArr;
exports.zipObj = zipObj;
exports.ArrObjMergeAttributs = ArrObjMergeAttributs;
exports.ArrObjMerge_AttributsFirst = ArrObjMerge_AttributsFirst;
exports.arrTake = arrTake;
exports.addSomeAttrs = addSomeAttrs;
exports.getArrayKeys = getArrayKeys;
exports.getArrayValues = getArrayValues;
exports.arrtake = arrtake;
exports.isArrayObjHave = isArrayObjHave;
exports.isContainByFun = isContainByFun;
exports.arrayDifference = arrayDifference;
exports.arraySymmetricDifference = arraySymmetricDifference;
exports.mergeArrayValu = mergeArrayValu;

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

var _ObjUtils = require('./ObjUtils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function uniqBy() {
  var attribute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return R.uniqWith(R.eqBy(R.prop(attribute)))(array);
}

function mergeWith(arr1, arr2) {
  return R.merge(arr1, arr2);
}
function unionWith(prop, arr1, arr2) {
  return R.unionWith(R.eqBy(R.prop('' + prop)), arr1, arr2);
}
function arrFind(prop, val, arr) {
  return R.find(R.propEq('' + prop, val))(arr) || {};
}

function getRequireAttributesArr(prop, arr) {
  return R.map(R.prop('' + prop))(arr);
}

function zipObj(arr1, arr2) {
  return R.zipObj(arr1, arr2);
}

function ArrObjMergeAttributs() {
  var added = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return R.map(R.mergeDeepRight(added))(arr);
}
function ArrObjMerge_AttributsFirst() {
  var added = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return R.map(R.mergeDeepLeft(added))(arr);
}

function arrTake(num) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return R.take(num, arr);
}

function addSomeAttrs(mergeFun) {
  var initArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return R.compose(R.map(mergeFun))(initArray);
}

function getArrayKeys(arr) {
  return R.keys(arr);
}

function getArrayValues(arr) {
  return R.keys(arr);
}

function arrtake(num, arr) {
  return R.take(num, arr);
}

function isArrayObjHave(arr, x) {
  var field = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'menuName';

  var selectedDetail = R.find(R.propEq(field, x))(arr);
  return !!(0, _ObjUtils.isNotNil)(selectedDetail);
}

function isContainByFun(fun) {
  var isContained = R.curry(fun);
  var isMenuContained = function isMenuContained(nemus, name) {
    var selected = R.filter(isContained(name), nemus);
    return !R.isEmpty(selected);
  };
  return isMenuContained;
}

function arrayDifference(arr1, arr2) {
  return R.difference(arr1, arr2);
}

function arraySymmetricDifference(arr1, arr2) {
  return R.symmetricDifference(arr1, arr2);
}

function mergeArrayValu(changedValueArr, originArrobj) {
  if (!Array.isArray(changedValueArr) || changedValueArr.length == 0) {
    return;
  }
  for (var j = 0; j < changedValueArr.length; j += 1) {
    var dealItem = changedValueArr[j];

    var changedGridLayoutitemIndex = -1;
    for (var i = 0; i < originArrobj.length; i += 1) {
      if (originArrobj[i].i === dealItem.i) {
        changedGridLayoutitemIndex = i;
        break;
      }
    }
    if (changedGridLayoutitemIndex >= 0) {
      originArrobj[changedGridLayoutitemIndex] = (0, _ObjUtils.merge)(originArrobj[changedGridLayoutitemIndex], dealItem);
    }
  }
}