//https://adispring.coding.me/2017/06/27/Favoring-Curry/

var R = require('ramda');
var log = console.log;


// curried version
var formatNames2 = R.curry(function (first, middle, last) {
    return first + ' ' + middle + ' ' + last;
});
formatNames2('John', 'Paul', 'Jones');
//=> 'John Paul Jones' // (definitely the musician!)
var jp = formatNames2('John', 'Paul'); //=> returns a function
log(jp('Jones')); //=> 'John Paul Jones' (maybe this one's the admiral)
jp('Stevens'); //=> 'John Paul Stevens' (the Supreme Court Justice)
jp('Pontiff'); //=> 'John Paul Pontiff' (ok, so I cheated.)
jp('Ziller'); //=> 'John Paul Ziller' (magician, a wee bit fictional)
log(jp('Georgeandringo')); //=> 'John Paul Georgeandringo' (rockers)


function fetchData() {
    var data = {
        result: "SUCCESS",
        interfaceVersion: "1.0.3",
        requested: "10/17/2013 15:31:20",
        lastUpdated: "10/16/2013 10:52:39",
        tasks: [
            {
                id: 104, complete: false, priority: "high",
                dueDate: "2013-11-29", username: "Scott",
                title: "Do something", created: "9/22/2013"
            },
            {
                id: 105, complete: false, priority: "medium",
                dueDate: "2013-11-22", username: "Lena",
                title: "Do something else", created: "9/22/2013"
            },
            {
                id: 107, complete: true, priority: "high",
                dueDate: "2013-11-22", username: "Mike",
                title: "Fix the foo", created: "9/22/2013"
            },
            {
                id: 108, complete: false, priority: "low",
                dueDate: "2013-11-15", username: "Punam",
                title: "Adjust the bar", created: "9/25/2013"
            },
            {
                id: 110, complete: false, priority: "medium",
                dueDate: "2013-11-15", username: "Scott",
                title: "Rename everything", created: "10/2/2013"
            },
            {
                id: 112, complete: true, priority: "high",
                dueDate: "2013-11-27", username: "Lena",
                title: "Alter all quuxes", created: "10/5/2013"
            }
        ]
    };

    return new Promise((resolve, reject) => resolve(data))
}

//var   bb = fetchData().then(data=> console.log(`  ${JSON.stringify(data) } `) )
var getIncompleteTaskSummaries = async function (membername) {
    const aa = await fetchData()
        .then(x => {
            console.log(`getIncompleteTaskSummaries1  ${JSON.stringify(R.prop('tasks')(x)) }`);
            ;
            return R.prop('tasks')(x)
        })
    console.log(`getIncompleteTaskSummaries2 ${aa} `)
    return aa;

}
var bb = getIncompleteTaskSummaries()
console.log(`promise  result  ${JSON.stringify(bb) }`);


fetchData().then(R.prop('tasks'))
    .then(x => {
        console.log(`step1 ${x} `);
        return x
    })
    .then(R.filter(R.propEq('username', 'Lena')))
    .then(x => {
        console.log(`step2 ${x} `);
        return x
    })
    .then(R.reject(R.propEq('complete', true)))
    .then(R.map(R.pick(['id', 'dueDate', 'title', 'priority'])))
    .then(R.sortBy(R.prop('dueDate')))
    .then(x => {
        console.log(` result ${JSON.stringify(x) }`);
        ;
        return x
    })