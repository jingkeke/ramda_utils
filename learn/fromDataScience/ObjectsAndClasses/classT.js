


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




// Active 
//

 class Active {
   static transform(input){

     console.log('default transform:',input)
     return input ;
   }

  constructor (name, transform) {
    this.name = name
    this.transform = transform || Active.transform
    this.subscribers = []
  }

  subscribe (someone) {
    this.subscribers.push(someone)
  }

  update (input) {
    console.log(this.name, 'got', input)
    const output = this.transform(input)
    for (let s of this.subscribers) {
      s.update(output)
    }
  }
}




const start = new Active('start', (x) => Math.min(x, 10))
const left = new Active('left', (x) => 2 * x)
const right = new Active('right', (x) => x + 1)
// const final = new Active('final', (x) => x)
const final = new Active('final', )
start.subscribe(left)
start.subscribe(right)
left.subscribe(final)
right.subscribe(final)

start.update(123)
