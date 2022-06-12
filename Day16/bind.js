
// let user={
//     name:"Ram",
//     firstName:"satti",
//     courseCount:3,
//     getDetails:function(){
//       return `${this.firstName} has these many Courses ${this.courseCount}`
//     }
// }

// let user1={
//     name:"shyam",
//     firstName:"sundar",
//     courseCount:3,
//     getDetails:function(){
//         return `${this.firstName} has these many Courses ${this.courseCount}`
//       }
   
// }
// let sum=user.getDetails()
// // console.log(sum)

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//        console.log(this.firstName + " " + this.lastName)
//     }
//   }
  
//   setTimeout(      person.display.bind(person)
//   , 3000);

const add = (function () {
    let counter = 0;
    console.log(counter)

    return function () {counter += 1; return counter}
    console.log(counter)
  })();
  
  add();
  add();
  add();