import {} from "bootstrap";
import React from "react";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import {
    CardGroup,
    Card,
    Button,
    CardBody,
    CardText,
    CardSubtitle,
    CardImg,
    CardTitle,
  } from "reactstrap";
const Cart = ({ cartItem,removeItem,handlePay }) => {
       let Amount=0

       cartItem.forEach(cart=>{
        // Amount=Amount+parseFloat(cart.productPrice)
        Amount+= parseFloat(cart.productPrice)
       })
    return (
    <div>
      <ListGroup className="mb-4">
        {cartItem.map((cart) => {
          return (
            <ListGroupItem className="mb-2">
              <Row>
                <Col>
                  <img
                    height={80}
                    src={cart.smallImage}
                  />
                </Col>
                <Col>
                  <div className="d-flex flex-column">
                    <div>Product Name:{cart.productName}</div>
                    <span>Price:{cart.productPrice}</span>
                    <Button onClick={()=>removeItem(cart.id)} className="danger">Remove</Button>
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
     {Amount>0 && <CardGroup className="mb-4 text-center">
        <Card>
         
          <CardBody>
            <CardTitle tag="h5">Total Amount</CardTitle>
            
            <CardText>
               {Amount}
            </CardText>
            <Button  onClick={handlePay}>Pay Now</Button>
          </CardBody>
        </Card>
      </CardGroup>}

    </div>
  );
};

export default Cart;
// https://codesandbox.io/s/nine-shoppingcart-cfl48?from-embed=&file=/src/Components/Cart.js