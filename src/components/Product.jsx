import styled from "styled-components";
import Button from "./Button";

const StyledProduct = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  left: 5%;
  text-align: center;
`;

const StyledCount = styled.div`
  width: 40%;
  display: flex;
  position: absolute;
  right: 5%;
  align-items: center;
  justify-content: space-around;
`;

const Product = (props) => {
  const buttonWidth = "30px";
  const buttonHeight = "30px";

  return (
    <StyledProduct>
      <h2 stlye={{ width: "60%" }}>{props.name}</h2>
      <StyledCount>
        <Button
          onClick={props.increment}
          disabled={props.amount >= props.max}
          w={buttonWidth}
          h={buttonHeight}
          bg="lightGreen"
        >
          +
        </Button>
        <h4>
          {props.amount} {props.unit}
        </h4>

        <Button
          onClick={props.decrement}
          disabled={props.amount <= 0}
          w={buttonWidth}
          h={buttonHeight}
          bg="paleVioletRed"
        >
          -
        </Button>
      </StyledCount>
    </StyledProduct>
  );
};

export default Product;
