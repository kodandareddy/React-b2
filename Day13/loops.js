const myState = ["raj", "del", "pun", "a.p", "ts"];

// for(let i=0;i<myState.length;i++){
//   console.log(myState[i],i)
// }

// myState.forEach((element,index) => {
//     console.log(element,index)
// });

// function getData(myState) {
//     let data = [];

//   for (let i = 0; i < myState.length; i++) {
     
//     if (typeof myState[i] == "string") {
//       data.push(myState[i]);
//     }
//   }
//   console.log(data)
// }
// getData(myState)
// let i=0
// while(i<myState.length){
//  console.log(myState[i])
//  i=i+1
// //  or
// //  i++
// }

// let i=20
// do{
// console.log(i)
// i++
// }while(i<10)



function printPrimeNumbers(num){
   for(let i=1;i<num;i++){
       let flag=0
        for(let j=2;j<i;j++){

            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
}
}

printPrimeNumbers(30)