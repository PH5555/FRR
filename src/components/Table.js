import React from "react";
import styled from "styled-components";

export const Table = (props) => {
  const {size} = props;
  const width = size === 'small' ? 61 : 92;
  return <Block width={width}/>;
}

const Block = styled.div`
  width: ${props => props.width}px;
  height: 156px;

  border: 5px solid #282828;
  border-radius: 8px;
`;