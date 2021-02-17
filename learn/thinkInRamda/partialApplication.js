var R = require('ramda')

const publishedInYear = (book, year) => book.year === year

const titlesForYear = (books, year) => {
    const selected = R.filter(book => publishedInYear(book, year), books)

    return R.map(book => book.title, selected)
}


const books = [{year: '2017', title: 'java'},{year: '2017', title: 'python'}, {year: '2015', title: 'c++'}];

const aa = titlesForYear(books, '2017')
console.log(`aaaa  ${JSON.stringify(aa) }`);

// 版本二
const publishedInYearV2 = year => books => publishedInYear(books, year)
const titlesForYear2 = (books, year) => {
    const selected = R.filter(publishedInYearV2(year), books)
    return R.map(book => book.title, selected)
}

const bb = titlesForYear(books, '2017')
console.log(`bbbb  ${JSON.stringify(bb) }`);

// 版本三 用ramda 实现

const titlesForYearV3= (books,year)=> {
    const selected = R.filter(R.partialRight(publishedInYear,[year]) ,books);
    return R.map(book=>book.title,selected)
}

const cc = titlesForYearV3(books, '2017')
console.log(`ccccc  ${JSON.stringify(cc) }`);


// 版本四 用curry
 const publishedInYearV3 =R.curry( ( year,book) => book.year === year ) //调换顺序

const  titleForYearV4 = (book,year)=>{
    const selected = R.filter(publishedInYearV3(year), book);
    return R.map(book => book.title, selected);

}

const dd = titleForYearV4(books, '2017')
console.log(`ddd  ${JSON.stringify(dd) }`);

// 顺序错误的参数
const publishedInYearV4 = R.curry((book, year) => book.year === year);

const titleForYearV5 = (book,year)=>{
    const  selected = R.filter(R.flip(publishedInYearV4)(year),book);
    return  R.map(book=>book.title,selected)
}
const ee = titleForYearV5(books, '2017')
console.log(`eee  ${JSON.stringify(ee) }`);

// 占位符

const titlesForYearV6 = (books, year) => {
    const selected = R.filter(publishedInYearV4(R.__, year), books)
    return R.map(book => book.title, selected)
}

const  ff =titlesForYearV6(books,'2017')
console.log(`ff  ${JSON.stringify(ff) }`);


// 管道

const titleForYearV7 = (books, year) =>
    R.pipe(
        R.filter(publishedInYearV3(year)),
        R.map(book => book.title)
    )(books)

const gg = titleForYearV7(books, '2017');
console.log(` gg ${JSON.stringify(gg) }`);