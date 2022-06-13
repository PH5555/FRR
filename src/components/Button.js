import React from "react";
import styled from "styled-components";

export const Button = (props) => {

  const { text, onClick } = props;
  return (
    <ButtonBox onClick={onClick}>
      <Text>{text}</Text>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 217px;
  height: 52px;
  background: #ff3939;
  border-radius: 17px;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
`;
