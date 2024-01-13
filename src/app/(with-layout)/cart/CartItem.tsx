import React from "react";
import styled from "styled-components";
import { Image, Price, Title } from "../../../../components/CardsList/Cards";

const CartItemContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(100% - 20px);
  background-color: #333333;

  @media (min-width: 768px) {
    width: calc(50% - 20px);
    margin: 10px;
  }

  @media (min-width: 1200px) {
    width: calc(33.33% - 20px);
  }
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const RemoveButton = styled.button`
  background-color: #d9534f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;

const CartItem = ({
  item,
}: {
  item: { image: string; title: string; description: string; price?: string };
}) => {
  const handleRemoveFromCart = () => {
    // You can replace this with your actual logic to remove the product from the cart
    console.log("Product removed from cart:", item);
  };

  return (
    <CartItemContainer>
      <Content>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={item.image} style={{width:'100px', height:'100px'}} alt={item.description} />
          <div style={{ marginLeft: "16px", flex: 1 }}>
            <Title>{item.title}</Title>
            <span>{item.price && <Price>{item.price}</Price>}</span>
          </div>
        </div>
        <ButtonContainer>
          <RemoveButton onClick={handleRemoveFromCart}>
            Remove from Cart
          </RemoveButton>
        </ButtonContainer>
      </Content>
    </CartItemContainer>
  );
};

export default CartItem;
