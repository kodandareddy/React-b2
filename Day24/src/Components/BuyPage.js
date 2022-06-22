import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import CartItems from "./CartItems";
import { faker } from "@faker-js/faker";
import {v4 as  uuidv4} from 'uuid'
const BuyPage = ({addInCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://myjson.dit.upm.es/api/bins/adiz").then((res) => {
      // res.data.photos
      const {
        data: { photos },
      } = res;
      const allProducts = photos.map((photo) => {
        return {
            id:uuidv4(),
          smallImage: photo.src.medium,
          productName: faker.random.word(),
          productPrice: faker.commerce.price(),
        };
      });
      setProducts(allProducts);
    });
  }, []);

  return (
    <Row>
      {products.map((product) => {
        return (
          <Col md={6} sm={8}>
            <CartItems product={product} addInCart={addInCart}/>
          </Col>
        );
      })}
    </Row>
  );
};

export default BuyPage;
