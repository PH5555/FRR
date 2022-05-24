import React, { useState } from "react";
import { SeatSelector } from "../components/SeatSelector";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";

export const RoomReservation = () => {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');
  // 구현의 편의성을 위해 선택한 좌석은 1개로 제한하는게 편할거라고 생각. => 그 외는 에러처리 해줘야함
  
  const onClickSeat = (seat) => {
    // todo - 빈 좌석 선택했을때 선택한 좌석에 뜨게끔 구현
  }
  
  const onClickReservation = () => {
    // todo - 예약하기 버튼 눌렀을때 기능 구현
  }
  
  return (
    <Container>
      <Cover>
        <SeatStatus/>
        <SeatSelector selected={selected} name={name} setName={setName}/>
      </Cover>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1090px;
  justify-content: end;
`;

const Cover = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #000000;
  width: 100%;
  height: 780px;
  z-index: 1;
  padding: 90px 0;
`;
