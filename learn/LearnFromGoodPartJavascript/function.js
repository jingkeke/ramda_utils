


function add (first ,second){return first + second}
function mul (first ,second){ return first * second}
function sub(first,second){ return first - second }
function doubl(first){ return  Math.doub1(first) } 
function squre(first){ return  Math.sqrt(first) }
function square(first){ return  Math.sqrt(first) }


function identity(i ){return i }


// 
function  indentityf(val){
    return function (){ 
         return val
      }
  }

function addf(first){

      return function(sec){

        return first+ sec
      }
}



//var addf = liftf(add);
// addf(3)(4)           // 7
// liftf(mul)(5)(6)     // 30

function liftf(binary  ){
    
  return function(first ){

  
     return function (second){

       return binary(first ,second)
     }
}
}

// var add3 = curry(add, 3);
// add3(4)              // 7
// curry(mul, 5)(6)     // 30
function curry(binary ,first){
     return liftf(binary )(first)
}

// function curry(func, ...first) {
//     return function (...second) {
//         return func(...first, ...second);
//     };
// }

log = (...arg)=>console.log([''].concat( arg))


//

var inc = curry(add,1)
// var inc = addf(1)
//  var inc= liftf(add)(1)


log(inc(5)         )     // 6
log(inc(inc(5))      )   // 7


function twice(binary){


  return function(a){

    return binary(a,a)
  }
}




// var bus =reverse(sub)
// bus (3， 2) // -1
// function reverse(binary){
//   return function(a,b){
//     return binary (b,a)
//   }
// }


function reverse(binary){
  return function(...argument){
    return binary (...argument.reverse())
  }
}




// function composeu(doub1,square)(5) //100
//

function composeu(f,g){

     return function (a){
         
       return f(g(a))
       
     }

}

// composeb (add, mul) (2, 3, 7) // 35

function composeb (f, g){

  return function (a,b,c){

     return g(f(a,b),c)

  }
}

// 
function limit(binary,count){
   //知识点 我老感觉要建个变量其实可以直接用  ...
  //let count =0
      
  return function (...arg){
        
    if(count<=0) return undefined;

     count-=1;

     return binary(...arg)

  }
}

var add_ltd = limit(add, 1)
log( 'limit::' ,add_ltd(3, 4) );// 7
log(add_ltd(3, 5) )//1 undefined



// Write a from function that
// produces a generator that will
// produce a series O1 values.
  //
  //
  //
 
function from1 (a){
  
 function  *gen(){
   while(1){

       yield a;

        a+=1}

   }
  let b= gen()
    
  return function(){

    return b.next().value

  }


}

function from (a){

 return function (){
     
     let b= a
     a+=1
     return b 

 }


}




var index = from (0) ;
log('gen',index() )//0
log(index()  )// 1
log(index() )//2



function to(gener ,end){

    return function(){
     let val= gener()
       if(end>val){
         return val
       }

      return undefined;

    }

}


var index= to(from(1),2);

index()
index()
log(index(),'to' )//undefined



function fromTo(start,end){

  return to(from(start),end)


}
var ft= fromTo(0,5)
log('fromeTo',ft())
log('fromeTo',ft())
log('fromeTo',ft())
log('fromeTo',ft())


// if gen is undefined ,use fromTo 
function element(arr, gen){
    if(gen===undefined){
      gen = fromTo(0 ,arr.length)
    }
  return function (){
     let index = gen()
    if(index !==undefined){
      return arr[index]
    }
    // return arr[gener()]

  }

}

var ele = element([
    'a', 'b', 'c', 'd'
], fromTo(1, 3));

ele()    // 'b'
ele()    // 'c'
ele()    // undefined






function collect(gen ,arr){
        
     return function(){

       let v = gen()
       if(v!==undefined){
         arr.push(v)
       }
       return v
     }


}


var array= []
col= collect(fromTo(0,2),array)


col()
col()

log('coll:',array)





function filter(gen, fun){
 //   return function(){
 // let v ;
 //     do{
 //      v = gen()
 //    }while(v!==undefined && !fun(v))
 //       return v
 //
 //   }
   

  //version 2 tail recursion !!!!!! es6  
  //https://frontendmasters.com/courses/good-parts-javascript-web/function-challenge-5/ 
   return function recur (){
      
     let v = gen()

     if(v==undefined || fun(v)){
      return v
     }
 return  recur()

   }

}




var fil = filter(fromTo(0, 5), 
    function third(value) {
        return (value % 3) === 0;
    });
log('filter',fil()  )  // 0
log(fil())    
log(fil() )   
log(fil() )   
log(fil() )   


//https://frontendmasters.com/courses/good-parts-javascript-web/function-challenge-5/

  function concat_V1 (gen1 ,gen2){

       let gen = gen1
    return function(){
   
        let v = gen()
       
       if(v!=undefined){
          return v
       }

        gen = gen2
    
      return gen()
    }

  }

// !!!! 
function concat(...gens) {

    var next = element(gens),
        gen = next();
    return function recur() {
        var value = gen();
        if (value === undefined) {
            gen = next();
            if (gen !== undefined) {
                return recur();
            }
        }  
        return value;
    };
}



var con = concat(fromTo(0, 3),
    fromTo(0,2));
log(con(),'concat' )    // 0
log(con(),'concat' )    // 1
log(con(),'concat' )    // 2
log(con(),'concat' )    // 0
log(con(),'concat' )    // 1
log(con(),'concat' )    // undefined



function repeat(gen){
      
  // verson 1 
       //       let var;  
       //       do{
       //        val=  gen()
       //
       //       } while(val!=undefined) 
       // 
       //     
  //
    //version 2 j
          if(gen() !==undefined){
              repeat(gen) 
          }


}


var array = [];
repeat(collect(fromTo(0, 4), array));
log(array);    // 0, 1, 2, 3


// use repeat 
function map(array, unary) {
    var ele = element(array),
        result = [];

    repeat(collect(function () {
        var value = ele();
        if (value !== undefined) {
            return unary(value);
        }
    }, result));
    return result;
}

log( map([2, 1, 0], inc),'map',   ) // [3, 2, 1]

// use repeat 

function reduce(array, binary)  {
    var ele = element(array),
        result;
    repeat(function () {
        var value = ele();
        if (value !== undefined) {
            result = result === undefined
                ? value
                : binary(result, value);
        }
        return value;
    });
    return result;
}

reduce([], add)           // undefined
reduce([2], add)          // 2
log('reduce:',reduce([2, 1, 0], add) )   // 3


function gensymf(K ){
    let g = from(1)  
    return function (){
        
    return K+g() 

    }

}

var geng = gensymf("G"),
    genh = gensymf("H"); 
geng()      // "G1"
genh()      // "H1"
geng()      // "G2"
log ( "gensymf",genh())      // "H2"






// function fibonaccif(a, b) {
//     var i = 0;
//     return function () {
//         var next;
//         switch (i) {
//         case 0:
//             i = 1;
//             return a;
//         case 1:
//             i = 2;
//             return b;
//         default:
//             next = a + b;
//             a = b;
//             b = next;
//             return next;
//         }
//     };
// }

// best optimized version
// function fibonaccif(a, b) {
//     return function () {
//         var next = a;
//         a = b;
//         b += next;
//         return next;
//     };
// }

//version 2 
function fibonaccif(a,b){

  return concat( element( [a,b],), 
     function (){
           let  tmp 
            [tmp,a] =[a,b]
            b= tmp+a 
          return b
             
    }
  )  
  
}

var fib = fibonaccif(0, 1);
  log('fib',fib())    // 0
log('',fib())    // 1
log('',fib())    // 1
log('',fib())    // 2
log('',fib())    // 3
log('',fib())    // 5



function counter(val){
   
 return {
   up:function(){
     val +=1;
     return val
   },
   down:function(){
     val -=1;

     return val

   }
 }

}


var object = counter(10),
    up = object.up,
    down = object.down;
log('counter',up())     // 11
log('',down())   // 10
log('',down())   // 9
log('',up())     // 10


function revocable(f){
   
  return {

    invoke:function() {
    
     if(f!==undefined){
      return    f()
      }
     return undefined

    },
   revoke :function() {

     f=undefined;

   }

  }

}

//#ilike important!!!! 
var rev = revocable(add),
    add_rev = rev.invoke;
add_rev(3, 4);    // 7
rev.revoke();
add_rev(5, 7);    // undefined



function m(value, source) {
    return {
        value: value,
        source: (typeof source === 'string') 
            ? source
            : String(value)
    };
}


JSON.stringify(m(1))
// {"value": 1, "source": "1"}
JSON.stringify(m(Math.PI, "pi"))
// {"value": 3.14159…, "source": "pi"}
//

function addm(m1,m2){

  return m(m1.value+m2.value,
          "("+ m1.source+'+'+ m2.source  +')')

}

  JSON.stringify(addm(m(3), m(4)))
// {"value": 7, "source": "(3+4)"}
log('',JSON.stringify(addm(m(1), m(Math.PI, "pi"))))
// {"value": 4.14159…, "source": "(1+pi)"}
//
  //


function liftm(f, oper) {

      return function (m1,m2) {
               
        return m(f(m1.value,m2.value),
          "("+ m1.source+ oper +m2.source  +')')

      }
}


var addm = liftm(add, "+");

JSON.stringify(addm(m(3), m(4)))
// {"value": 7, "source": "(3+4)"}
JSON.stringify(liftm(mul, "*")(m(3), 
    m(4)))
// {"value": 12, "source": "(3*4)"}
//
  



var addm = liftm(add, "+");
log('',JSON.stringify(addm(3, 4)))
// {"value": 7, "source": "(3+4)"}



// function exp(  arr ) {
//
//    if(Array.isArray(arr)){
//      const [f, param] = [arr[0],arr.slice(1) ]
//      log('exp::' ,param)
//      return f(exp(...param) )
//    } 
//
//   return arr
//
// }


// 感觉有难度 ,就是多余的参数传了没影响
function exp(value) {
    return (Array.isArray(value))
        ? value[0](
            exp(value[1]), 
            exp(value[2])
        )
        : value;
}

var sae = [mul, 5, 11];
log('',exp(sae))    // 55
log('',exp(42))     // 42



var nae = [
    Math.sqrt, 
    [
        add, 
        [square, 3], 
        [square, 4]
    ]
];
log('nested::',exp(nae))    // 5

// 我的版本 有点难度 一开始a 如何存储
// function addg(val){
//   //  isnumber
//  let a = undefined  
//   function addgN(val){
//     if(val ===undefined){
//       tmp  =a 
//       a= undefined
//       return tmp  
//     }
//     a = ((a===undefined?0:a) +val)
//     return addgN 
//   }
//   return addgN(val)
//
// }
//

function addg(first) {
    function more(next) {
        if (next === undefined) {
            return first;  
        }  
        first += next;
        return more; 
    }
    if (first !== undefined) {
        return more;
    }
}

log('',addg())             // undefined
log('',addg(2)() )         // 2
log('',addg(2)(7)())       // 9
log('',addg(3)(0)(4)() )   // 7
log('',addg(1)(2)(4)(8)() )// 15






