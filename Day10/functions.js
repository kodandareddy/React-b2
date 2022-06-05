// function ShowMyName(name){
//     console.log(`Your Name is ${name}`)
// }
// var ShowMyName=function(name){
//     console.log(`Your Name is ${name}`)

// }

// arrow Functions
// const ShowMyName=(name)=>{
//     console.log(`Your Name is ${name}`)

// }



// function AddTwoNumbers(a,b){
//     return a+b
// }
// var sum=AddTwoNumbers(2,3)
// console.log(AddTwoNumbers(2,3))
// console.log(sum)


// function ReturnMaximum(num1,num2,num3){
//    if(num1>num2 && num1>num3){
//        return num1
//    }else{
//        if(num2>num1 && num2>num3){
//            return num2
//        }
//    }
//    return num3
// }


// console.log( ReturnMaximum(20,30,40)) 

function Iseligible(age){
    if(age>18){
        return "eligible to vote"
    }else{
        return "not eligible to vote"
    }
}
console.log(Iseligible(30))


function isEvenOrOdd(number){
  if(number %2 ==0){
      return "even"
  }else{
      return "odd"
  }
}


console.log(isEvenOrOdd(6))