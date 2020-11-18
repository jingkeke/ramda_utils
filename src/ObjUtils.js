import * as R from 'ramda';

export function deepclone(obj) {
  return R.clone(obj);
}

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
 * @param themeVariablse
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
