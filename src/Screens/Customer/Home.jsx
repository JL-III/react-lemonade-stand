import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

import Card from "../../components/Card";
import Fill from "../../components/Fill";
import Liquid from "../../components/Liquid";
import Glass from "../../components/Glass";
import Product from "../../components/Product";
import IceBox from "../../components/IceBox";

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Home = () => {
  const [products, updateProducts] = useState([
    {
      name: "Lemon Juice",
      amount: 0,
      max: 8,
      unit: "oz",
      price: 0.3,
    },
    {
      name: "Sugar",
      amount: 0,
      max: 12,
      unit: "oz",
      price: 0.15,
    },
    {
      name: "Ice Cubes",
      amount: 0,
      max: 12,
      unit: "cubes",
      price: 0.05,
    },
  ]);

  const incrementProduct = (name) => {
    updateProducts(
      products.reduce(
        (acc, product) =>
          product.name === name
            ? [
                ...acc,
                {
                  ...product,
                  amount:
                    product.amount <= product.max
                      ? product.amount + 1
                      : product.max,
                },
              ]
            : [...acc, product],
        []
      )
    );
  };

  const decrementProduct = (name) => {
    updateProducts(
      products.reduce(
        (acc, product) =>
          product.name === name && product.amount > 0
            ? [
                ...acc,
                {
                  ...product,
                  amount: product.amount > 0 ? product.amount - 1 : 0,
                },
              ]
            : [...acc, product],
        []
      )
    );
  };

  const calcPercent = (amount, max, maxFill = 100) =>
    100 - (amount / max) * maxFill;

  const calcTotal = () =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(
      products.reduce((acc, { amount, price }) => acc + amount * price, 0)
    );

  return (
    <StyledHome>
      <h1>Total Price: {calcTotal()}</h1>
      <Glass>
        <Liquid
          bg="#FFC85C"
          percent={calcPercent(products[0].amount, products[0].max)}
          backfill="#FFC85C"
          frontfill="#FFD974"
        />
        <Fill
          bg="#fff"
          percent={calcPercent(products[1].amount, products[1].max, 30)}
          opacity="70%"
        />
        <IceBox iceCubes={products[2].amount}></IceBox>
      </Glass>
      <Card>
        {products.map((product, idx) => (
          <Product
            key={product.name + idx}
            {...product}
            increment={() => incrementProduct(product.name)}
            decrement={() => decrementProduct(product.name)}
          />
        ))}
      </Card>
      <Button w="200px" h="50px" bg="#F96E46">
        Add To Cart
      </Button>
    </StyledHome>
  );
};

export default Home;
