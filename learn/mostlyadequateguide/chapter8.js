var curry = require('lodash').curry;
var _ = require('ramda') ;


var IO = function(f) {
    this.__value = f;
}

IO.of = function(x) {
    return new IO(function() {
        return x;
    });
}

IO.prototype.map = function(f) {
    return new IO(_.compose(f, this.__value));
}



//  io_window_ :: IO Window
var io_window = new IO(function(){ return window; });

io_window.map(function(win){ return win.innerWidth });
// IO(1430)


