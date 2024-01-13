import React from "react";
import Card from "./Cards";
import styled from "styled-components";
import Select from "react-select";
import customSelectTheme from "utils/customSelectTheme";

const DropdownContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  width: 200px;
`;

const ProductCardList = () => {
  const dummyData = [
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220402/ZrFN/6247526ef997dd03e243cb11/-1117Wx1400H-410262125-black-MODEL.jpg",
      title: "Product 1",
      description: "Short description of Product 1.",
      price: "$19.99",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220402/ZrFN/6247526ef997dd03e243cb11/-1117Wx1400H-410262125-black-MODEL.jpg",
      title: "Product 2",
      description: "Short description of Product 2.",
      price: "$24.99",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220402/ZrFN/6247526ef997dd03e243cb11/-1117Wx1400H-410262125-black-MODEL.jpg",
      title: "Product 3",
      description: "Short description of Product 3.",
      price: "$29.99",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220402/ZrFN/6247526ef997dd03e243cb11/-1117Wx1400H-410262125-black-MODEL.jpg",
      title: "Product 4",
      description: "Short description of Product 4.",
      price: "$39.99",
    },
  ];

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <>
      <DropdownContainer>
        <Select
          options={options}
          theme={customSelectTheme}
          placeholder="Select an option"
        />
      </DropdownContainer>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {dummyData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductCardList;
