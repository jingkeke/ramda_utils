import * as R from 'ramda';

export function deepclone(obj) {
  return R.clone(obj);
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
// export function deepClone(source) {
//   if (!source && typeof source !== 'object') {
//     throw new Error('error arguments', 'deepClone')
//   }
//   const targetObj = source.constructor === Array ? [] : {}
//   Object.keys(source).forEach(keys => {
//     if (source[keys] && typeof source[keys] === 'object') {
//       targetObj[keys] = deepClone(source[keys])
//     } else {
//       targetObj[keys] = source[keys]
//     }
//   })
//   return targetObj
// }

/**
 *将对象的键、值交换位置
 *
 *
 * var raceResults = {
 *   first: 'alice',
 *   second: 'jake'
 * };
 * R.invertObj(raceResults);
 * //=> { 'alice': 'first', 'jake':'second' }
 *
 */
export function inverObj(obj = {}) {
  return R.invertObj(obj);
}
/**
 * isNil(null); //=> true
 isNil(undefined); //=> true
 isNil(0); //=> false
 isNil([]); //=> false
 * @param obj
 * @returns {boolean}
 */
export function isNil(obj) {
  return R.isNil(obj);
}

/**
 *
 isEmpty([1, 2, 3]);   //=> false
 isEmpty([]);          //=> true
 isEmpty('');          //=> true
 isEmpty(null);        //=> false
 isEmpty({});          //=> true
 isEmpty({length: 0}); //=> false
 * @param obj
 * @returns {*}
 */
export function isEmpty(obj) {
  return R.isEmpty(obj);
}
export function isNotNil(obj) {
  return !R.isNil(obj);
}

export function isNotEmpty(obj) {
  return !R.isNil(obj) && !R.isEmpty(obj);
}

/**
 *  R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 * @param vars
 * @param themeVariables
 * @returns {*}
 */
export function getObjectVariables(vars, themeVariables) {
  return R.pick(vars)(themeVariables);
}
/**
 * 合并两个对象的自身属性（不包括 prototype 属性）
 * R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 //=> { 'name': 'fred', 'age': 40 }
 * @param obj1
 * @param obj2
 * @returns {*|ut|Un|{}}
 */
export function merge(added, obj) {
  return R.merge(added)(obj);
}
