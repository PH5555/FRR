import React from "react";
import styled from "styled-components";

export const Item = (props) => {
  const {item} = props;
  console.log(item);
  return (
    <Container>
      <Img src={item.img}/>
      <Text>{item.name}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 200px;
  height: 280px;
  margin: 10px 20px;
  border-radius: 8px;
  padding: 0 10px 20px 10px;
`;

const Text = styled.div`
  color: #000000;
  font-weight: 700;
`;

const Img = styled.img`
  height: 180px;
  margin: auto;
`;
