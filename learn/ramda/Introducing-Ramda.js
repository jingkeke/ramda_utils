//https://adispring.coding.me/2017/06/25/Introducing-Ramda/
var R = require('ramda') ;
var  _  = require('underscore')
// Underscore/Lodash style:
var validUsersNamedBuzz1 = function(users) {
    return _.filter(users, function(user) {
        return user.name === 'Buzz' && _.isEmpty(user.errors);
    });
};


// Ramda style:
var validUsersNamedBuzz = R.filter(  R.where({name: R.equals('Buzz') , errors: R.isEmpty}) ) ;

 validUsersNamedBuzz1([{name:'Buzz'}])
  var  result = validUsersNamedBuzz([{name:'Buzz'}])
console.log(` resultresult${result} `)
var pred = R.where({
    a: R.equals('foo'),
    b: R.complement(R.equals('bar')),
    x: R.gt(R.__, 10),
    y: R.lt(R.__, 20)
});

pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false







// `prop` takes two arguments. If I just give it one, I get a function back
var moo = R.prop('moo');
// when I call that function with one argument, I get the result.
var value = moo({moo: 'cow'}); // => 'cow'

console.log(`value ${value} `)





// take an object with an `amount` property
// add one to it
// find its remainder when divided by 7
var amtAdd1Mod7 = R.compose(  R.add(1), R.prop('amount'));

// we can use that as is:
amtAdd1Mod7({amount: 17}); // => 4
amtAdd1Mod7({amount: 987}); // => 1
amtAdd1Mod7({amount: 68}); // => 6
// etc.

// But we can also use our composed function on a list of objects, e.g. to `map`:
var amountObjects = [
    {amount: 903}, {amount: 2875654}, {amount: 6}
]
var bb=  R.map(amtAdd1Mod7, amountObjects); // => [1, 6, 0]
console.log(`bbbb ${bb} `)
// of course, `map` is also curried, so you can generate a new function
// using `amtAdd1Mod7` that will wait for a list of "amountObjects" to
// get passed in:
var amountsToValue = R.map(amtAdd1Mod7);
amountsToValue(amountObjects); // => [1, 6, 0]
