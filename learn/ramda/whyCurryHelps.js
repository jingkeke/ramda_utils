//https://hughfdjackson.com/javascript/why-curry-helps/


var R = require('ramda');

var objects = [{ id: 1 }, { id: 2 }, { id: 3 }]
var get = R.curry((property, object) => object[property]  )
objects.map(get('id')) //= [1, 2, 3]
const bb = objects.map(get('id'));

console.log(` bb  ${JSON.stringify(bb) }`);
