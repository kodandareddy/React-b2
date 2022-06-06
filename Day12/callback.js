// function isEven(a){
//     if(a%2 ==0){
//         return true
//     }else{
//         return false
//     }

// }

// // console.log(isEven())
// // // ()=>{}
// console.log([2,4,6,9].every((a)=> a%2 ==0))
// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);
// // https://www.programiz.com/javascript/callback


// filter method
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


// let data=words.filter((word,index)=> {
//     console.log(index)
//    return  word.length >6
// })

// console.log(data)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi",1,4);
console.log(fruits)