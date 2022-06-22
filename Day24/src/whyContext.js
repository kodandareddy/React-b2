import React from 'react'

const Parent = () => {
  return (
    <div>
       <h1> i am Parent</h1>
       <br/>
        <Child name="i am Child" subChild="I am SubChild"/>
    </div>
  )
}

export default Parent



const Child=(props)=>{
    return (
    
    <>
            <h1>{props.name}</h1>
            <SubChild subChild={props.subChild}/>

    </>
    )
}

const SubChild=(props)=>{
    return <h1>{props.subChild}</h1>
}