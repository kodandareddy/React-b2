// // function ShowMyName(name){
// //     console.log(`Your Name is ${name}`)
// // }
// // var ShowMyName=function(name){
// //     console.log(`Your Name is ${name}`)

// // }

// // arrow Functions
// // const ShowMyName=(name)=>{
// //     console.log(`Your Name is ${name}`)

// // }

// // function AddTwoNumbers(a,b){
// //     return a+b
// // }
// // var sum=AddTwoNumbers(2,3)
// // console.log(AddTwoNumbers(2,3))
// // console.log(sum)

// // function ReturnMaximum(num1,num2,num3){
// //    if(num1>num2 && num1>num3){
// //        return num1
// //    }else{
// //        if(num2>num1 && num2>num3){
// //            return num2
// //        }
// //    }
// //    return num3
// // }

// // console.log( ReturnMaximum(20,30,40))

// function Iseligible(age){
//     if(age>18){
//         return "eligible to vote"
//     }else{
//         return "not eligible to vote"
//     }
// }
// console.log(Iseligible(30))

// function isEvenOrOdd(number){
//   if(number %2 ==0){
//       return "even"
//   }else{
//       return "odd"
//   }
// }

// console.log(isEvenOrOdd(6))
import React, { Component } from "react";
import "./example.css";
class Example extends Component {
  state = {
    firstDrop: false,
    secondDrop: false,
    value1: "",
    value2: "",
    inVal: "",
  };

  onfirstChange = (e) => {
    this.setState({ value1: e.target.value, value2: "" });
  };

  reset = () => {
    this.setState({ value1: "", value2: "", inVal: "" });
  };
  render() {
    console.log(this.state.value2);
    return (
      <div className="main-cont">
        <select onChange={this.onfirstChange}>
          <option default>select</option>
          <option value="x">x</option>
          <option value="y">y</option>
        </select>
        {this.state.value1 === "x" && (
          <select onChange={(e) => this.setState({ value2: e.target.value })}>
            <option>Select</option>
            <option value="input">1</option>
            <option value="checkbox">2</option>
          </select>
        )}
        {this.state.value1 === "y" && (
          <input onChange={(e) => this.setState({ inVal: e.target.value })} />
        )}
        {this.state.value2 && (
          <input
            type={this.state.value2}
            onChange={(e) => this.setState({ inVal: e.target.value })}
          />
        )}
        {(this.state.value2 === "input" || this.state.value1 === "y") && (
          <p>{this.state.inVal}</p>
        )}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Example;
