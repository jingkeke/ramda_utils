

function fabric(n){

   if (n===1){
     return 1
   }

   return n+ fabric(n-1)

}


module.exports={fabric}

// fabric(2)
