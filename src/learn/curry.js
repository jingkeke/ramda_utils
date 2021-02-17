var curry = require('lodash').curry;

var match = curry(function(what, str) {

    return str.match(what)

})

var  replace  = curry((what,replacement,str)=>str.replace(what,replacement))
var  filter = curry((f,ary)=>( ary.filter(f)))
var map= curry((f,ary)=>ary.map(f))

var  hasSpaces = match(/\s+/g);
/*console.log(`hasSpaceshasSpaces ${hasSpaces.toString()} `)
console.log(`hasSpaces ${hasSpaces("hello  world ")} `)
console.log(`hasSpaces2 ${hasSpaces("helloworld")} `)




console.log(match(/\s+/g, "hello world"))

console.log(match(/\s+/g)("hello world"))*/
console.log(filter(hasSpaces,["tori_spelling","tori  amos"] ) )


var  findSpaces = filter(hasSpaces);

console.log(findSpaces(["tori_spelling","tori  amos"] ) )

//
var  getChildren =  x=> x.childNodes ;
var  allTheChildren = map(getChildren)
var  source  = [{childNodes:12},{childNodes:13},{childNodes:14},{childNodes:15}]
console.log(allTheChildren(source))
console.log(allTheChildren.toString())


