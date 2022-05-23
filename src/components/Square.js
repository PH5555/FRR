import React from "react";
import styled from "styled-components";

export const Square = (props) => {
  const {size, color} = props;
  let hover;
  if (props.hover === undefined) hover = true;
  return <Block size={size} color={color} hover={hover}>{props.text}</Block>;
}

const Block = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: ${props => props.color};
  border-radius: 8px;

  font-size: 16px;
  font-weight: 700;
  text-align: center;

  &:hover {
    cursor: ${props => props.hover ? "pointer" : "auto"};
  }
`;