import React from "react";
import styled from "styled-components";

export const TimeBox = (props) => {
  const {selected, reserved} = props;
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
  return <Block bg={color}/>
}

const Block = styled.div`
  background-color: ${props => props.bg};
  border: 5px solid #282828;
`;