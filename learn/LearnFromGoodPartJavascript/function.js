


function add (first ,second){return first + second}
function mul (first ,second){ return first * second}
function sub(first,second){ return first - second }
function doubl(first){ return  Math.doub1(first) } 
function squre(first){ return  Math.sqrt(first) }


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

log = (...arg)=>console.log(['xx:'].concat( arg))


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
  
 function  *gen(){while(1){

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
var ft= fromTo(0,2)
log('fromeTo',ft())
log('fromeTo',ft())
log('fromeTo',ft())

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























