import React from "react";
import styled from "styled-components";

export const Item = (props) => {
  const {item, onClick} = props;
  return (
    <Container onClick={() => onClick(item.name)}>
      <Img src={item.img}/>
      <Text>{item.name}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
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
  margin: auto;
`;
