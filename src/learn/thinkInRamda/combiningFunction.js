var R = require('ramda');

const  person = {birthCountry:'Amearca',naturalizationDate:false ,age:12}
const wasBornInCountry = person => person.birthCountry === 'OUR_COUNTRY'
const wasNaturalized = person => person.naturalizationDate
const isOver18 = person => person.age >= 18

var f = R.pipe(Math.pow, R.negate, R.inc);

const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x

const operate = (x, y) => {
    const product = multiply(x, y)
    const incremented = addOne(product)
    const squared = square(incremented)

    return squared
}

console.log(`operate(3, 4) ${operate(3, 4)} `)   // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169


const  operate2 =  R.pipe(multiply,addOne,square) ;
console.log(`operate2operate2 ${operate2(3,4)} `)


const   operate3 =  R.compose(square,addOne,multiply) ;

console.log(`operate3 ${operate3(3,4)} `)
