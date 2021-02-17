

// curry

function curry(fn){

    return function (){

        if(fn.length>arguments.length){
           var  slice =Array.prototype.slice;
            var args = slice.apply(arguments)
            return function (){

                return fn.apply(null, args.comcat(slice.apply(arguments)));

        }
    }


}
