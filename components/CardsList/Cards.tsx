import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #636363;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(100% - 20px);

  @media (min-width: 768px) {
    width: calc(50% - 20px);
    margin: 10px;
  }

  @media (min-width: 1200px) {
    width: calc(33.33% - 20px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column; /* Adjusted to display elements vertically */

  .productInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #bdbdbd;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  color: #ababab;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Card = ({
  item,
}: {
  item: { image: string; title: string; description: string; price?: string };
}) => {
  const handleAddToCart = () => {
    // You can replace this with your actual logic to add the product to the cart
    console.log("Product added to cart:", item);
  };

  return (
    <CardContainer>
      <Image src={item.image} alt={item.title} />
      <Content>
        <div className="productInfo">
          <span>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </span>
          <span>{item.price && <Price>{item.price}</Price>}</span>
        </div>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </Content>
    </CardContainer>
  );
};

export default Card;
