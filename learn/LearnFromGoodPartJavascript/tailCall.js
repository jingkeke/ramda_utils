

export function fabric(n){

   if (n===1){
     return 1
   }

   return n+ fabric(n-1)

}


fabric(2)
