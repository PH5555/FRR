import React, { useState } from "react";
import { Button } from "../components/Button";
import { TextBoxWithBorder } from "../components/TextBoxWithBorder";
import styled from "styled-components";

export const SeatSelector = (props) => {
  const {selected, name, setName} = props;
  
  const onChange = (event) => {
    setName(event.target.value);
  }
  
  return (
    <Container>
      <Text>선택한 좌석:</Text>
      <SelectedBox>
        <TextBoxWithBorder text={selected} size="small"/>
      </SelectedBox>
      <Text>신청자 이름:</Text>
      <SelectedBox>
        <div>
          <TextBoxWithBorder text={name} size="mid" onChange={onChange}/>
        </div>
      </SelectedBox>
      <Button text="예약하기"/>
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