import React from "react";
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
const CartItems = ({product,addInCart}) => {
  return (
    <div>
      <CardGroup className="mb-4 text-center">
        <Card>
          <CardImg
            alt="Card image cap"
            src={product.smallImage}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">{product.productName}</CardTitle>
            
            <CardText>
             {product.productPrice}
            </CardText>
            <Button onClick={()=>addInCart(product)}>Buy Now</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CartItems;
