// @ts-nocheck
import * as R from 'ramda';
import { isNotNil, merge } from './ObjUtils';

/*
返回无重复的列表 ,元素通过 predicate 进行相同性判断。如果通过 predicate 判断两元素相同，保留第一个元素。
aa = [{name:"1"},{name:"2"},{name:"4"},{name:"4"}]
uniqBy('name',aa)
 */

export function uniqBy (attribute = '', array = []) {
  // @ts-ignore
  return R.uniqWith(R.eqBy(R.prop(attribute)))(array);
}

// R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
//= > { 'name': 'fred', 'age': 40 }
export function mergeWith(arr1, arr2) {
  return R.merge(arr1, arr2);
}
/*
取并集
var l1 = [{a: 1}, {a: 2}];
var l2 = [{a: 1}, {a: 4}];
R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
*/

export function unionWith (prop, arr1, arr2) {
  // @ts-ignore
  return R.unionWith(R.eqBy(R.prop(`${prop}`)), arr1, arr2);
}
/*
查找并返回 list 中首个满足 predicate 的元素；
var xs = [{a: 1}, {a: 2}, {a: 3}];
R.find(R.propEq('a', 2))(xs); //=> {a: 2} */

export function arrFind(prop, val, arr) {
  return R.find(R.propEq(`${prop}`, val))(arr) || {};
}

/**
 * 对象数组获取某个属性组成新的数组
 * @param prop
 * @param arr   aa = [
 {'themename':'2k_setting1','sceneid':'2k_setting1' },
 {'themename':'2k_setting2','sceneid':'2k_setting2'},
 {'themename':'2k_setting3','sceneid':'2k_setting3'},
 {'themename':'8k_setting1','sceneid':'8k_setting1'} ,
 {'themename':'8k_setting2','sceneid':'8k_setting2'},
 {'themename':'8k_setting3','sceneid':'8k_setting3'},
 ]
 * @returns   ["2k_setting1", "2k_setting2", "2k_setting3", "8k_setting1", "8k_setting2", "8k_setting3"]
 */

/**
 * 数组对象 ,提取所有的对象的一个属性
 * @param attr
 * @param obj
 * @returns {*}
 */
export function getRequireAttributesArr(prop, arr) {
  return R.map(R.prop(`${prop}`))(arr);
}

/**
 * 数组对象 ,提取对象中符合条件的
 * https://ramda.cn/docs/#propEq
 * @param attr
 * @param obj
 * @returns {*}
 */
export function getEqualObjFromArr(prop, val, arr) {
  return R.find(R.propEq("a", val))(arr);
}
/**
 * R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}

 * @param arr1
 * @param arr2
 * @returns {*}
 */
export function zipObj(arr1, arr2) {
  return R.zipObj(arr1, arr2);
}

/**
 * 对象数组添加属性
 * @param added 添加的属性 如{a: 1}
 * @param arr   如  [{b: 1}, {b: 2}]
 * @returns {*}  如 [{b: 1,a: 1}, {b: 2,a: 1}]
 * @constructor
 */
export function ArrObjMergeAttributs(added = {}, arr = []) {
  return R.map(R.mergeDeepRight(added))(arr);
}
/*
if added  conflited with arr ,added saved
 */
export function ArrObjMerge_AttributsFirst(added = {}, arr = []) {
  return R.map(R.mergeDeepLeft(added))(arr);
}

/**
 * 数组,
 * 取数组前num 个
 * @constructor
 */
export function arrTake (num, arr = []) {
  return R.take(num, arr);
}

/**
 *初始化第二个silder 数据 ，附加一些信息
 */

export function addSomeAttrs(mergeFun, initArray = []) {
  return R.compose(R.map(mergeFun))(initArray);
}

/**
 * 返回给定对象所有可枚举的、自身属性的属性名组成的列表
 * R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 * @param arr
 * @returns {*}
 */
export function getArrayKeys(arr) {
  return R.keys(arr);
}

/**
 * 返回给定对象所有可枚举的、自身属性的属性名组成的列表
 * R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 * @param arr
 * @returns {*}
 */
export function getArrayValues(arr) {
  return R.keys(arr);
}

/**
 * 取出前n个
 * @param num
 * @returns {void|*}
 */
export function arrtake(num, arr) {
  return R.take(num, arr);
}

/**
 * 对象数组是否包含 某特定对象属性值
 * @param arr
 * @param x
 * @returns {boolean}
 */
export function isArrayObjHave (arr, x, field = 'menuName') {
  const selectedDetail = R.find(R.propEq(field, x))(arr);
  return !!isNotNil(selectedDetail);
}

/**
 *  wbc 写的一个用curry的需求 思路是这样,但是感觉挺麻烦的
 *  这样用 最好[ { "menuName": "警情审核", }, { "menuName": "假套牌管理", },].some(x=>x.menuName =='假套牌管理')
 *
 * @param fun (menuName, nemus) => nemus.menuName == menuName
 * @returns {function(*=, *=): boolean}
 * demo:
 *  const isMenuContained = isContainByFun((menuName, nemus) => nemus.menuName == menuName);
 *  isMenuContained([ { "menuName": "警情审核", }, { "menuName": "假套牌管理", },], '警情审核')
 */
export function isContainByFun(fun) {
  const isContained = R.curry(fun);
  const isMenuContained = (nemus, name) => {
    const selected = R.filter(isContained(name), nemus);
    return !R.isEmpty(selected);
  };
  return isMenuContained;
}

/**
 * 求差集。求第一个列表中，未包含在第二个列表中的任一元素的集合。对象和数组比较数值相等，而非引用相等。
 * R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 * @param arr1
 * @param arr2
 * @returns {*}
 */
export function arrayDifference(arr1, arr2) {
  return R.difference(arr1, arr2);
}

/**
 * 求对称差集。所有不属于两列表交集元素的集合，其元素在且仅在给定列表中的一个里面出现。
 * @param arr1
 * @param arr2
 * @returns {*}
 */
export function arraySymmetricDifference(arr1, arr2) {
  return R.symmetricDifference(arr1, arr2);
}

/**
 * changedValueArr 的值合并到originArrobj中 i值一样针对高分
 * 见 tests目录里面的测试!!!!!!!
 * @param changedValueArr
 * @param originArrobj
 */
export function mergeArrayValu(changedValueArr, originArrobj) {
  if (!Array.isArray(changedValueArr) || changedValueArr.length == 0) {
    return;
  }
  for (let j = 0; j < changedValueArr.length; j += 1) {
    const dealItem = changedValueArr[j];

    let changedGridLayoutitemIndex = -1;
    for (let i = 0; i < originArrobj.length; i += 1) {
      if (originArrobj[i].i === dealItem.i) {
        changedGridLayoutitemIndex = i;
        break;
      }
    }
    if (changedGridLayoutitemIndex >= 0) {
      originArrobj[changedGridLayoutitemIndex] = merge(
        originArrobj[changedGridLayoutitemIndex],
        dealItem
      );
    }
  }
  return originArrobj;
}

/**
 * 按照字段分组数组
 * @param field 字段名 string
 * @param array
 * @returns {[]}
 */
export function groupByField(field, array) {
  const bb = new Set(array.map((x) => x[field]));
  const ee = [];
  for (const cc of bb) {
    ee.push({ id: cc, children: array.filter((x) => x[field] === cc) });
  }
  return ee;
}

/**
 *
 * @param {*} arr
 * @param {*} index1
 * @param {*} index2
 */

// npm :array-move

// arrayMove([].concat(dataSource), oldIndex, newIndex)

// js 数组改变 位置 排序
// switch 2
export function swapArr(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

// toTop
export function arrToFirst(arr, index) {
  if (index !== 0) {
    arr.unshift(arr.splice(index, 1)[0]);
  }
}
// up -1
export function arrToUp(arr, index) {
  if (index !== 0) {
    arr[index] = arr.splice(index - 1, 1, arr[index])[0];
  } else {
    arr.push(arr.shift());
  }
}
// down -1
export function arrToDown(arr, index) {
  if (index !== arr.length - 1) {
    arr[index] = arr.splice(index + 1, 1, arr[index])[0];
  } else {
    arr.unshift(arr.splice(index, 1)[0]);
  }
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

// innnerJoin   从数组对象里面按照id 取值
// R.innerJoin(
// (record, id) => record.id === id,
// [{id: 824, name: 'Richie Furay'},
//  {id: 956, name: 'Dewey Martin'},
//  {id: 313, name: 'Bruce Palmer'},
//  {id: 456, name: 'Stephen Stills'},
//  {id: 177, name: 'Neil Young'}],
// [177, 456, 999]
// );
// //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]


// const b =  [
//   {
//     "enumValue": "01",
//     "enumtypeId": 1110,
//     "enumName": "交通拥堵"
//   },
//   {
//     "enumValue": "02",
//     "enumtypeId": 1110,
//     "enumName": "交通违法"
//   },
//   {
//     "enumValue": "02",
//     "enumtypeId": 1112,
//     "enumName": "交通违法"
//   },
// ]
//
// const [a,c ]=getEnum(b, [1110,1112])
// console.debug("debug:: 😈","app.tsx",":", "58" , "11:05 AM",  a,c )

export function getEnum (dataList,keysList){
  const resultArr=[]
  keysList.forEach((key,i)=>{
    const re=  R.filter(R.propEq('enumtypeId', key))(dataList);
    resultArr.push(re)
  })
  //todo 优化是用innerJoin  groupBy
 // const result= R.groupBy((a,b)=>a.enumtypeId==b.enumtypeId,   R.innerJoin((record,id)=>record.enumtypeId==id ,
 //  dataList,keysList
 //  ) )

  return  resultArr
}

