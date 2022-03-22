
log = (...arg)=>console.log([''].concat( arg))

function vector() {
    var array = [];

    return {
        get: function get(i) {
            return array[i];     
        },
        store: function store(i, v) {
            array[i] = v;    
        },
        append: function append(v) {
            array.push(v); 
        }
    };
}

myvector = vector();
myvector.append(7);
myvector.store(1, 8);
myvector.get(0)    // 7
myvector.get(1)    // 8



//问题 如何 在外部获取 到array
var stash; 
myvector.store('push',function(){
  stash= this
})

myvector.append()

log('',stash)


//解决方法  

function vector() {
    var array = [];

    return {
        get: function get(i) {
            return array[+i];     
        },
        store: function store(i, v) {
            // +'push' => NaN
            array[+i] = v;    
        },
        append: function append(v) {
            // array.push(v); 
             array[array.lenght]= v
        }
    };
}




function pubsub() { 
    var subscribers = []; 
    return { 
        subscribe: function (subscriber) {   
            subscribers.push(subscriber); 
        }, 
        publish: function (publication) {
            var i, length = subscribers.length; 
            for (i = 0; i < length; i += 1) { 
                subscribers[i](publication); 
            } 
        } 
    }; 
}
my_pubsub = pubsub();
my_pubsub.subscribe(log);
my_pubsub.publish("It works!");

//导致错误1
// my_pubsub.subscribe()
// my_pubsub.publish("It works!");
    // log("It works!")



//导致错误2  解决方法 Object.freeze
my_pubsub.publish= undefined


//
//导致错误3 
my_pubsub.subscribe(function(){
  this.length= 0
})


//  黑客可以 扰乱顺序
function pubsub2() { 
    var subscribers = []; 
    return Object.freeze({ 
        subscribe: function (subscriber) {   
            subscribers.push(subscriber); 
        }, 
        publish: function (publication) {
            subscribers.forEach(function (s) { 
                try { 
                    s(publication);
                } catch (ignore) {} 
            }); 
        }
    });         
}

function limit(binary,count){
   //知识点 我老感觉要建个变量其实可以直接用  ...
  //let count =0
      
  return function (...arg){
        
    if(count<=0) return undefined;

     count-=1;

     return binary(...arg)

  }
}

test = pubsub();
test.subscribe(log);
test.subscribe(limit(function () {
            test.publish("Out of order");
        }, 1));
test.subscribe(log);

test.publish("It works2!");










// 正确版本 final

function pubsubFinal() { 
    var subscribers = []; 
    return Object.freeze({ 
        subscribe: function (subscriber) {   
            subscribers.push(subscriber); 
        }, 
        publish: function (publication) {
            subscribers.forEach(function (s) { 
               //use setTimeout 就不需要 try 了 报错也是在其他地方报,对其他没影响
                setTimeout(function () {
                    s(publication);
                }, 0);
            }); 
        }
    });         

}








