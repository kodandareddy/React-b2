// Array.splice(start, removeCount, newItem, newItem, newItem)
let text = "How are you doing today ?";
const myArray = text.split(" ");
 
let data=myArray.filter((ele)=>{
   if(ele =='?'){
       return false
   }
   else{
       return true
   }
})

console.log(data.join("_"))