




// evenote  rethinking-async-js
//

  function makeThunk(fn){
       let cb ,text ;
       let arg =[].slice.call( arguments,1)

       return function (cb){
              arg.push(cb) 
              fn.apply(null,arg)
       }

  }

  




// test

function testAsync(x,y,cb){

  setTimeout(()=>{
    cb(x,y)
  },1000)

}

let thunk = makeThunk(testAsync,10,15);

thunk(console.log)
