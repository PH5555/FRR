import React, { useState } from "react";
import styled from "styled-components";

export const TimeBox = (props) => {
  const { day, time, selected, reserved, text, onClick } = props;
  const [isSelected, setIsSelected] = useState(selected);
  const setColor = () => {
    if (reserved) {
      return "#ffffff";
    }
    if (selected) {
      return "#282828";
    }
    return "transparent";
  };
  const color = setColor();

  const onClickTime = () => {
    if (selected || reserved) {
      return;
    }
    setIsSelected(!isSelected);
    onClick(day, time);
  };

  return (
    <Block bg={color} onClick={onClickTime}>
      {text}
    </Block>
  );
};

const Block = styled.div`
  background-color: ${(props) => props.bg};
  border: 2px solid #282828;
  width: 90px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;
