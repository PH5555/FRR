import React from "react";
import styled from "styled-components";

export const Item = (props) => {
  const { item, onClick } = props;
  
  const onClickItem = () => {
    onClick(item.name);
  };
  
  return (
    <Container onClick={onClickItem}>
      <Img src={item.image} />
      <Text>{item.name}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  max-width: 170px;
  max-height: 250px;
  margin: 10px 20px;
  border-radius: 8px;
  padding: 10px 30px 20px 30px;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  color: #000000;
  font-weight: 700;
`;

const Img = styled.img`
  height: 180px;
  width: 120px;
  margin: auto;
`;
