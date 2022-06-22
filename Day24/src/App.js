import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const addInCart = (product) => {
    console.log(product);
    const isAlreadyAdd = cartItem.findIndex((cart) => cart.id == product.id);
    if (isAlreadyAdd == -1) {
      setCartItem([...cartItem, product]);
    } else {
      toast.error('Already add in the cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };
  const removeItem=(id)=>{
    setCartItem([...cartItem].filter(cart=>cart.id!=id))
  }
  const handlePay=()=>{
    setCartItem([])
    toast.success('Your Payment is success', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <Container>
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart removeItem={removeItem} cartItem={cartItem} handlePay={handlePay} />
        </Col>
      </Row>
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
