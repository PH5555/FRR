import React, {
  useState,
  useEffect
} from "react";
import { Button } from "../components/Button";
import { TextBoxWithBorder } from "../components/TextBoxWithBorder";
import styled from "styled-components";

export const SeatSelector = (props) => {
  const {selected, name, setName, clickEvent, button} = props;
  
  const onChange = (event) => {
    setName(event.target.value);
  };
  
  const setSeat = () => {
    if (selected === '') {
      return '';
    }
    if (selected % 2 === 0) {
      return 'A' + parseInt((selected / 2) + 1);
    }
    return 'B' + parseInt((selected / 2) + 1);
  }
  
  const onReset = () => {
    setName('');
  };
  
  return (
    <Container>
      <Text>선택한 좌석:</Text>
      <SelectedBox>
        <TextBoxWithBorder text={setSeat()} size="small"/>
      </SelectedBox>
      <Text>신청자 이름:</Text>
      <SelectedBox>
        <div>
          <TextBoxWithBorder text={name} size="mid" onChange={onChange} onReset={onReset}/>
        </div>
      </SelectedBox>
      <Button text={button} onClick={clickEvent}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const SelectedBox = styled.div`
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
  width: 210px;
`;

const Text = styled.div`
  font-weight: 700;
`;