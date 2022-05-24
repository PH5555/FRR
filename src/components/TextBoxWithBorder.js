import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseSvg } from "../assets/close.svg";

export const TextBoxWithBorder = (props) => {
  const {text, onChange} = props;
  
  const getSize = () => {
    if (props.size === 'small') {
      return 92;
    }
    if (props.size === 'mid') {
      return 120;
    }
    return 180;
  }
  
  const disabled = onChange === undefined ?? false;
  const width = getSize();
  const textWidth = width - 50;
  
  const onClickClose = () => {
    // todo - close 버튼 눌렀을때 내용 삭제 기능 구현
  }
  
  return (
    <Block width={width}>
      <Text value={text || ""} width={textWidth} onChange={onChange} disabled={disabled}/>
      <SvgCover>
        <CloseSvg/>
      </SvgCover>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  width: ${props => props.width}px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  border: 5px solid #282828;
  border-radius: 12px;
  padding: 0 10px 0 0;
`;

const Text = styled.input`
  margin: auto 10px;
  border: none;
  background-color: transparent;
  width: ${props => props.width}px;
`;

const SvgCover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;