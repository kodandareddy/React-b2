// var name="Kodanda"

// console.log("Line Number3",name)

// function sayName(){
//     // var name="Mr.K"
//     console.log("line Number 7",name)
//     sayNameTwo()

//     function sayNameTwo(){
//         // var name="Mr.Kr"
//         console.log("line number 12",name)
//     }
// }

// sayName()
// var greeting="Helo univer"
// function greet() {
//     var greeting = 'Hello World!';
//     console.log(greeting);
//   }
//   // Prints 'Hello World!'
//   greet();
//   // Uncaught ReferenceError: greeting is not defined
//   console.log(greeting);

//   if(){

//   }

var name = 'Peter';
function greet() {
  var greeting = 'Hello';
  let lang = 'English';

  {
      let lang="Telugu"
    console.log(`${lang}: ${greeting} ${name}`);
  }
}
greet();

// https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53