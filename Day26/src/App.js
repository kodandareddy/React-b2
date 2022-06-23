import React, { Component } from 'react'
 import './index.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter:0,
     };
  }
  

  componentDidMount(){
    this.setState({counter:this.state.counter+10})

  }

  componentDidUpdate(){
   console.log("Your state has been updated")
  }


  componentWillUnmount(){
    alert('as')
  }
   handleClick=()=>{
   this.setState({counter:this.state.counter+1})

  }
  handleClick1=()=>{
    this.setState({counter:this.state.counter-1})

  }
  render() {
    return (
      <div className='dat'>
       <h1> {this.state.counter}</h1>
        <button onClick={this.handleClick}>
          +
        </button>
        <button onClick={this.handleClick1}>
          -
        </button>
      </div>
    )
  }
}
export default App

// https://www.geeksforgeeks.org/reactjs-class-based-components/