const R = require('ramda');


const forever21 = age => R.ifElse(R.gte(R.__, 21), R.always(21), R.inc)(age)

console.log(` forever21(13) ${forever21(13)} `)

const forever21V2 = R.ifElse(R.gte(R.__, 21), R.always(21), R.inc)

console.log(` forever21(13) ${forever21V2(13)} `)

//
const  watere  = temperature => R.cond([

    [R.equals(0),R.always('water  freezes at 0C')],
    [R.equals(1000),R.always('water  boils at 100C')],
    [R.T,temp=>`nothing  special happens at ${temp}'C`]

])(temperature)

console.log(`watere ${watere(12)} `)

const  watere_pointfree  =  R.cond([
    [R.equals(0),R.always('water  freezes at 0C')],
    [R.equals(1000),R.always('water  boils at 100C')],
    [R.T,temp=>`nothing  special happens at ${temp}'C`]

])

console.log(`watere ${watere_pointfree(12)} `)

//
const  person = {birthCountry:'Amearca',naturalizationDate:false ,age:12}
 const wasBornInCountry = person => person.birthCountry === 'OUR_COUNTRY'
const wasNaturalized = person => person.naturalizationDate
const isOver18 = person => person.age >= 18
const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)

const isEligibleToVote = person => isOver18(person) && isCitizen(person)

const  isCitizenV2 =  person =>R.either(wasBornInCountry,wasNaturalized)(person)
const  isCitizen_pointfree = R.either(wasBornInCountry,wasNaturalized)
const  isEliglibleToVote_pointfree = R.both(isOver18,isCitizen)


const  aa  =isCitizen_pointfree(person)
console.log(` isCitizen_pointfree ${JSON.stringify(aa) }`);



