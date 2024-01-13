"use client";

import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

interface CartItem {
  title: string;
  description: string;
  price: string;
  image: string;
}

const CartContainer = styled.div`
  margin-top: 16px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const cartItems = [
  {
    title: "Product 1",
    description: "Short description of Product 1.",
    price: "$19.99",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220402/ZrFN/6247526ef997dd03e243cb11/-1117Wx1400H-410262125-black-MODEL.jpg",
  },
  {
    title: "Product 2",
    description: "Short description of Product 2.",
    price: "$24.99",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220402/ZrFN/6247526ef997dd03e243cb11/-1117Wx1400H-410262125-black-MODEL.jpg",
  },
  // Add more items as needed
];

// const Cart: React.FC<CartProps> = ({ cartItems }) => {
const Cart = () => {
  return (
    <CartContainer>
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </CartContainer>
  );
};

export default Cart;
