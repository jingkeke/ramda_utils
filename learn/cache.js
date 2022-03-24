

// 2022年1月10日上午9:10:19   之前的没了.....



  // https://stackfull.dev/memoizing-async-functions-in-javascript
//


  function memoize(fn, getKey){
  const memo = {}
  return function memoized(...args){
     const key = getKey(...args)
     if(memo.hasOwnProperty(key)) return memo[key]

     memo[key] = fn.apply(this, args)
     return memo[key]
  }
}


/**
  *
// 多个请求过来 ,保证只执行一次

// USAGE

// const memoExpensiveOperation = memoizeAsync(expensiveOperation, key => key)
  *
  */
 function memoizeAsync(fn, getKey){
   const memo = {}, progressQueues = {}

   return function memoized(...allArgs){
       const callback = allArgs[allArgs.length-1]
       const args = allArgs.slice(0, -1)
       const key = getKey(...args)

        if(memo.hasOwnProperty(key)){
            callback(key)
            return
        }


        if( !progressQueues.hasOwnProperty(key) ){
           // processing new key, create an entry for it in progressQueues
           progressQueues[key] = [callback]
        } else {
           // processing a key that's already being processed, enqueue it's callback and exit. 
           progressQueues[key].push(callback);
           return
        }

        fn.call(this, ...args , (data) => {
           // memoize result
           memo[key] = data 
           // process all the enqueued items after it's done
           for(let callback of progressQueues[key]) {
                callback(data)
           }
           // clean up progressQueues
           delete progressQueues?.[key]
       })
   }
}


/**
  * promise
  *
  *
  */

 function memoizePromise(fn,getKey) {



  const memo = {},  progressQueues = {}

return  function memoProcessData(...allArgs){

     // const args = allArgs.slice(0,-1)
     const args = allArgs
     const key = getKey(...args)


    return new Promise((resolve, reject) => {
      // if the operation has already been done before, simply resolve with that data and exit
      console.log('memo now data',JSON.stringify(memo) ,'key',key)
      if(memo.hasOwnProperty(key)){
        resolve(memo[key])
        return;
      }

      if( !progressQueues.hasOwnProperty(key) ){
        // called for a new key, create an entry for it in progressQueues
        progressQueues[key] = [[resolve, reject]]

      } else {
       // called for a key that's still being processed, enqueue it's handlers and exit.         
        progressQueues[key].push([resolve, reject]);
        return;
      }


      fn.call(this,...args,)
        .then(data => {
          console.debug('fn res',data)
            memo[key] = data; // memoize the returned data
            // process all the enqueued entries after successful operation
            for(let [resolver, ] of progressQueues[key])
              resolver(data)
        })
        .catch(error => {
           // process all the enqueued entries after failed operation
           for(let [, rejector] of progressQueues[key])
              rejector(error);
         })
        .finally(() => {
          // clean up progressQueues
           delete progressQueues[key]
         })
    })
  }

}


//jest 现在不会写 ,先这么测试 2022年3月24日上午10:06:06

  let memo1= memoizeAsync(
    function add(a,b, callback){
      let c =  a+ b
      setTimeout(callback,  2000,c)
    },
    key=>key
  )

 // memo1(1,2,
 //   function callback(data){
 //          console.log('result',data) }
 // )
 //
 // memo1(1,2, function callback(data){ console.log('result1',data) })



console.log('"""""""""""""',  )

let memo2 = memoizePromise(

     async function add(a=0,b=0){

        console.log('add:',a,b)
        return new Promise(res=>{
           let c = a +b ;
           setTimeout(()=>res(c),3000)
        })

     },

    key=>key

)

 let res=  memo2(1,4,)

 res.then(data=>{
   console.log('promise::::',data)
 })


 let res2=  memo2(1,4,)

 res2.then(data=>{
   console.log('promise1::::',data)
 })





