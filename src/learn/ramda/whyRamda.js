
//https://adispring.coding.me/2017/06/25/Why-Ramda/

var R = require('ramda') ;
var log = console.log;

var tasks = [
    {username: 'Michael', title: 'Curry stray functions', dueDate: '2014-05-06',
        complete: true, effort: 'low', priority: 'low'},
    {username: 'Scott', title: 'Add `fork` function', dueDate: '2014-05-14',
        complete: true, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Write intro doc', dueDate: '2014-05-16',
        complete: true, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Add modulo function', dueDate: '2014-05-17',
        complete: false, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Separating generators', dueDate: '2014-05-24',
        complete: false, effort: 'medium', priority: 'medium'},
    {username: 'Scott', title: 'Fold algebra branch back in', dueDate: '2014-06-01',
        complete: false, effort: 'low', priority: 'low'},
    {username: 'Scott', title: 'Fix `and`/`or`/`not`', dueDate: '2014-06-05',
        complete: false, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Types infrastucture', dueDate: '2014-06-06',
        complete: false, effort: 'medium', priority: 'high'},
    {username: 'Scott', title: 'Add `mapObj`', dueDate: '2014-06-09',
        complete: false, effort: 'low', priority: 'medium'},
    {username: 'Scott', title: 'Write using doc', dueDate: '2014-06-11',
        complete: false, effort: 'medium', priority: 'high'},
    {username: 'Michael', title: 'Finish algebraic types', dueDate: '2014-06-15',
        complete: false, effort: 'high', priority: 'high'},
    {username: 'Scott', title: 'Determine versioning scheme', dueDate: '2014-06-15',
        complete: false, effort: 'low', priority: 'medium'},
    {username: 'Michael', title: 'Integrate types with main code', dueDate: '2014-06-22',
        complete: false, effort: 'medium', priority: 'high'},
    {username: 'Richard', title: 'API documentation', dueDate: '2014-06-22',
        complete: false, effort: 'high', priority: 'medium'},
    {username: 'Scott', title: 'Complete build system', dueDate: '2014-06-22',
        complete: false, effort: 'medium', priority: 'high'},
    {username: 'Richard', title: 'Overview documentation', dueDate: '2014-06-25',
        complete: false, effort: 'medium', priority: 'high'}
];

var tasks11 =[
    {
        id:1,
        title:'test1',
        dueDate:'20171026',
        complete:false,
        username:'jing',
    } ,{
        id:2,
        title:'test2',

        dueDate:'20171021',
        complete:false,
        username:'jing',

    },{
        id:3,
        title:'test3',

        dueDate:'20171029',
        complete:true,
        username:'zhou',

    },{
        id:4,
        title:'test4',

        dueDate:'20171030',
        complete:false,
        username:'zhou',

    }


]

var incomplete = R.filter(R.whereEq({complete: false}));

var groupByUser = R.partition(R.prop('username'));

var activeByUser = R.compose(groupByUser, incomplete);

var sortUserTasks = R.compose(R.map(sortByDateDescend), activeByUser);


var sortByDate=  R.sortBy(R.prop('dueDate') );
var sortByDateDescend=  R.compose(R.reverse  ,sortByDate  );

var  topFiveUserTasks =R.compose(R.map(R.take(5)) , sortUserTasks)



var   importanFields=R.project(['title','dueDate'])
var topDataAllUsers = R.compose(R.map(importanFields), topFiveUserTasks);
//var results = topDataAllUsers(tasks);


var results = groupByUser(tasks);

 log(`results  ${JSON.stringify( results) }`);


var incomplete = R.filter(R.where({complete: R.equals(false)}));
var sortByDate = R.sortBy(R.prop('dueDate'));
var sortByDateDescend = R.compose(R.reverse, sortByDate);
var importantFields = R.project(['title', 'dueDate']);
var groupByUser = R.groupBy(R.prop('username'));
var activeByUser = R.compose(groupByUser, incomplete);
var gloss = R.compose(importantFields, R.take(5), sortByDateDescend,incomplete);
var topData = R.compose(gloss, incomplete);
var topDataAllUsers = R.compose(R.map(gloss), activeByUser);
//var byUser = R.use(R.filter).over(R.propEq("username"));
var byUser = R.useWith(R.filter, [R.propEq("username"), R.identity]);
log("Gloss for Scott:");
log(topData(byUser("Scott", tasks)));
log("====================");
log("Gloss for everyone:");
