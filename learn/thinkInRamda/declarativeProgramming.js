var R = require('ramda');

const square = x => R.multiply(x, x)

const operate = R.pipe(
    R.multiply(1),
    R.inc,
    square
)
let  aa=2;

console.log(` aaaa ${operate(aa)} `)

console.log(` ${aa} `)

const OUR_COUNTRY='China'
const xiaoming = {
    birthCountry: 'China1',
    naturalizationDate:'1988',
    age:19
};

const wasBornInCountry = person => R.equals(person.birthCountry, OUR_COUNTRY)
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => R.gte(person.age, 18)

const isCitizen =  R.either(wasBornInCountry, wasNaturalized)

const isEligibleToVote =  R.both(isOver18, isCitizen)
let b=  isCitizen(xiaoming)
let c=  isEligibleToVote(xiaoming)
//gt 对应 >，lt 对应 <，lte 对应 <= 函数似乎违反了 Ramda 的 "待处理数据放在最后" 的原则，所以我们在 pipeline 或类似的情况下使用它们时，要格外小心。这时，flip 和 占位符 (__) 就派上了用场。


//defaultTo 检查第二个参数是否为空（isNil）。如果非空，则返回该值；否则返回第一个值。
const lineWidth = R.defaultTo(80, aa)


const forever21 = age => R.ifElse(R.gte(R.__, 21),R.identity, R.inc)(age)

console.log(`forever21 ${forever21(234)} `)
//如果 第二个分支是 identity，可以用 when 代替 ifElse
const  alwaysDrivingAgeV2 = R.when(R.lt(R.__,16),R.always(16))
console.log(`alwaysDrivingAgeV2 ${alwaysDrivingAgeV2(2)} `)

//如果第一个条件分支是indentity
const alwaysDrivingAge = age => R.unless(R.gte(R.__, 16), R.always(16))(age)
console.log(`alwaysDrivingAge ${alwaysDrivingAge(23)} `)
