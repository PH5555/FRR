import React from "react";
import { Button } from "../components/Button";
import { TextBoxWithBorder } from "../components/TextBoxWithBorder";
import styled from "styled-components";

export const SeatSelector = (props) => {
  const {selected, name, setName, clickEvent} = props;
  const onChange = (event) => {
    setName(event.target.value);
  }
  
  const onReset = () => {
    setName('');
  };
  
  const seatName = () => {
    if (selected === 0) return 'A1';
    if (selected === 1) return 'B1';
    if (selected === 2) return 'A2';
    if (selected === 3) return 'B2';
    if (selected === 4) return 'A3';
    if (selected === 5) return 'B3';
    if (selected === 6) return 'A4';
    if (selected === 7) return 'B4';
    if (selected === 8) return 'A5';
    if (selected === 9) return 'B5';
  }
  
  return (
    <Container>
      <Text>선택한 좌석:</Text>
      <SelectedBox>
        <TextBoxWithBorder text={seatName()} size="small"/>
      </SelectedBox>
      <Text>신청자 이름:</Text>
      <SelectedBox>
        <div>
          <TextBoxWithBorder text={name} size="mid" onChange={onChange} onReset={onReset} />
        </div>
      </SelectedBox>
      <Button text="예약하기" onClick={clickEvent}/>
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