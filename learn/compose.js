var curry = require('lodash').curry;
var _ = require('ramda/Introducing-Ramda') ;

var match = curry(function(what, str) {
    return str.match(what);
});

var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement);
});

var filter = curry(function(f, ary=[]) {
    return ary.filter(f);
});





var join = curry(function(f, ary=[]) {
    return ary.join(f);
});

var split = curry(function(f, ary="") {
    return ary.split(f);
});

var compose = function(f,g) {
    return function(x) {
        return f(g(x));
    };
};
var toUpperCase = function(x) { return x.toUpperCase(); };

var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);
//console.log(` ${shout("send in the clowns")} `);


var head = function(x) { console.log(`xxxxxx ${x} `) ;  return x[0]; };
var reverse = _.reduce(function(acc, x){ return [x].concat(acc); }, []);
 var last = compose(head, reverse);

//console.log(`lastlastlastlast  ${last(['jumpkick', 'roundhouse', 'uppercut'])} `);

var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

;
console.log(  shout("send in the clowns"));

var lastUpper =  _.compose( toUpperCase,  head, reverse);

console.log( lastUpper(['jumpkick', 'roundhouse', 'uppercut']));
