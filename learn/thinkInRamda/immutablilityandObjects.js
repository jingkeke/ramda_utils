const R = require('ramda');

//const  person = {birthCountry:'Amearca',naturalizationDate:false ,age:12}
//const wasBornInCountry = person => person.birthCountry === 'OUR_COUNTRY'
//const wasNaturalized = person => person.naturalizationDate
//const isOver18 = person => person.age >= 18

const OUR_COUNTRY ='China'
const xiaoming = {
    birthCountry: 'China',
    naturalizationDate:'1988',
    age:19,
    name:'xiaoming',
    langugae:{
        east:'Chiniese',
        west:'Englist'

    }
};


const wasBornInCountry = R.compose(R.equals(OUR_COUNTRY), R.prop('birthCountry'))
const wasNaturalized = R.compose(Boolean, R.prop('naturalizationDate'))
const isOver18 = R.compose(R.gte(R.__, 18), R.prop('age'))
const isCitizen =  R.either(wasBornInCountry, wasNaturalized)


const isEligibleToVote =  R.both(isOver18, isCitizen)
let b=  isCitizen(xiaoming)
let c=  isEligibleToVote(xiaoming)


 let d= R.pick(['name', 'age'], xiaoming)
console.log(`dd  ${JSON.stringify(d) }`);

console.log(`dd  ${ R.has('age' ,xiaoming)}`);
console.log(`path  ${ R.path(['a', 'b'], {a: {b: 2}})}`);

//keys
console.log(`  ${JSON.stringify(R.keys({a: 1, b: 2, c: 3}) ) }`);
console.log(`  ${JSON.stringify(R.values({a: 1, b: 2, c: 3}) ) }`);

let updatedPerson = R.assoc('name', 'New name', xiaoming);
  updatedPerson = R.assocPath(['langugae','east'], 'Japanese', xiaoming);

console.log(` updatedPerson ${JSON.stringify(updatedPerson) }`);
console.log(` updatedPerson ${JSON.stringify(xiaoming) }`);


const nextAge = R.compose(R.inc, R.prop('age'))
const celebrateBirthday = person => R.assoc('age', nextAge(person), person)

// 属性转换
const celebrateBirthdayV2 = R.evolve({ age: R.inc })
console.log(`celebrateBirthdayV2  ${JSON.stringify(celebrateBirthdayV2(xiaoming)) }`);

//evolve 可以一次转换多个属性，还可以进行嵌套转换
var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
var transformations = {
    firstName: R.trim,
    lastName: R.trim, // Will not get invoked.
    data: {elapsed: R.add(1), remaining: R.add(-1)}
};
const e= R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
console.log(`ee  ${JSON.stringify(e) }`);
console.log(`ee  ${JSON.stringify(tomato) }`);


