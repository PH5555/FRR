import React from "react";
import styled from "styled-components";


export const Square = (props) => {
  const {size, color, clickEvent, id} = props;

  let hover;
  if (props.hover === undefined) hover = true;
  return <Block size={size} color={color} id={id} hover={hover} onClick={(event)=>clickEvent(event, id)}>{props.text}</Block>;
}

const Block = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: ${props => props.color[props.id]};
  border-radius: 8px;

  font-size: 16px;
  font-weight: 700;
  text-align: center;

  &:hover {
    cursor: ${props => props.hover ? "pointer" : "auto"};
  }
`;
