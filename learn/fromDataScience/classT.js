


// Define a class called Delay whose call method always returns the value given in the previous call:


class Delay {
   constructor(val){
   this.val = val

   }


  call(val){
    const bef = this.val;
    this.val =val
    return bef

  }


}



// const example = new Delay('a')
// for (let value of ['b', 'c', 'd']) {
//   console.log(value, '->', example.call(value))
// }



// Define a class called Filter whose call method returns null if its input matches one of the values given to its constructor, or the input as output otherwise:

class Filter {

   constructor(...val){
   this.val = val
     console.log(val)
   }


  call(val){

if(this.val.indexOf(val)>=0){
  return null
}
    return val
  }


}

// const example = new Filter('a', 'e', 'i', 'o', 'u')
// for (let value of ['a', 'b', 'c', 'd', 'e']) {
//   console.log(value, '->', example.call(value))
// }





class Pipeline{

  constructor(...funcs){
    this.funcs=funcs
  }

 call(val){
   let v = null
    for (let func of this.funcs) {

       v = func.call(val)

      if (v== null){
        return null
      }
    }
   return v


 }



} 



const example = new Pipeline(new Filter('a', 'e', 'i', 'o', 'u'),
                             new Delay('a'))
for (let value of ['a' ,'b', 'c', 'd', 'e']) {
  console.log(value, '->', example.call(value))
}
