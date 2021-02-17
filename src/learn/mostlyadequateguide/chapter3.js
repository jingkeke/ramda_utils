

var memoize = function (f) {
    var cache = {};

    return function (f) {
        var arg_str = JSON.stringify(arguments)
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str]
    }

}

var squareNumber = memoize(x => x * x);

squareNumber(2)
squareNumber(2)
squareNumber(2)



