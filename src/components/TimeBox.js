import React from "react";
import styled from "styled-components";

export const TimeBox = (props) => {
  const {selected, reserved, text} = props;
  const setColor = () => {
    if (selected) {
      return "#282828";
    }
    if (reserved) {
      return "#ffffff";
    }
    return "transparent";
  }
  const color = setColor();
  return <Block bg={color}>{text}</Block>
}

const Block = styled.div`
  background-color: ${props => props.bg};
  border: 2px solid #282828;
  width: 101px;
  height: 35px;
  
  &:hover {
    cursor: pointer;
  }
`;