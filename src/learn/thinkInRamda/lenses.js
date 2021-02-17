var R = require('ramda')

const person = {
    name: 'Randy',
    socialMedia: {
        github: 'randycoulman',
        twitter: '@randycoulman'
    }
}



const nameLens = R.lensProp('name')
const twitterLens = R.lensPath(['socialMedia', 'twitter'])
var xHeadYLens = R.lensPath(['x', 0, 'y']);
console.log(`  ${JSON.stringify(R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) ) }`);
 var  aa= {x: [{y: 2, z: 3}, {y: 4, z: 5}]}
R.set(xHeadYLens, 1, aa);
 console.log(` aa ${JSON.stringify(aa) }`);

//=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
//=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}