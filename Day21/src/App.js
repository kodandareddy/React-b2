import "./index.css";
import { Card, CardBody,Container } from "reactstrap";
import Icons from "./Icons";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
let itemArray = new Array(9).fill("empty");

const App = () => {
  const[isCross,setIsCross]=useState(true)
  const[winMessage,setWinMessage]=useState("")

const checkIsWinner=()=>{
  if (
    itemArray[0] === itemArray[1] &&
    itemArray[0] === itemArray[2] &&
    itemArray[0] !== "empty"
  ) {
    setWinMessage(`${itemArray[0]} won`);
  } else if (
    itemArray[3] !== "empty" &&
    itemArray[3] === itemArray[4] &&
    itemArray[4] === itemArray[5]
  ) {
    setWinMessage(`${itemArray[3]} won`);
  } else if (
    itemArray[6] !== "empty" &&
    itemArray[6] === itemArray[7] &&
    itemArray[7] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[6]} won`);
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[3] &&
    itemArray[3] === itemArray[6]
  ) {
    setWinMessage(`${itemArray[0]} won`);
  } else if (
    itemArray[1] !== "empty" &&
    itemArray[1] === itemArray[4] &&
    itemArray[4] === itemArray[7]
  ) {
    setWinMessage(`${itemArray[1]} won`);
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[5] &&
    itemArray[5] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[2]} won`);
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[4] &&
    itemArray[4] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[0]} won`);
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[4] &&
    itemArray[4] === itemArray[6]
  ) {
    setWinMessage(`${itemArray[2]} won`);
  }
}
  const changeItem=(itemIndex)=>{
    if(itemArray[itemIndex] == "empty"){
      itemArray[itemIndex]=isCross ? "cross":"circle"
      setIsCross(!isCross)
    }else{
      toast.error('Please choose another box', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    checkIsWinner()  
    }

    const handleClick=()=>{
      itemArray=new Array(9).fill("empty")
      setWinMessage("")
    }
  return (
    <Container>
      {winMessage && <h1>{winMessage}</h1>}
      {winMessage && <button onClick={handleClick}>Rest Game</button>}
      <h1> {isCross ? "Cross":"cricle"}</h1>
      <div className="grid">
        {itemArray.map((item,index) => {
          return (
            <Card color="warning" onClick={()=>changeItem(index)}>
              <CardBody className="box">
                <Icons name={item}/>
              </CardBody>
            </Card>
          );
        })}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
    </Container>
  );
};

export default App;
