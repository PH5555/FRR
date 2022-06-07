import React, { useState, useEffect } from "react";
import { SeatSelector } from "../components/SeatSelector";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";


export const RoomReservation = () => {

  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');


  const [seatColor, setseatColor] = useState(['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']);

  const onClickSeat = (event, id) => {
    const changeId = id;
    if(selected !== '' && selected !== id) {
      alert("좌석은 1개만 선택 가능합니다.");
      return;
    }
    const newArr = seatColor;
    newArr[id] = (newArr[id] === '#fff' ? 'red' : '#fff');
    setseatColor(newArr);
    setSelected(changeId);
    if (seatColor[id] === "#282828") {
      alert("이미 예약된 좌석입니다.");
      return;
    }
    if (seatColor[id] === "#fff"){
      setSelected('');
    }
  }
  useEffect(() => {

  }, [seatColor]);



  const onClickReservation = () => {
    // todo - 예약하기 버튼 눌렀을때 기능 구현 - 일단 클릭되게 실현해놨음, 후에 서버 저장하는 거 추가해야 함
  }

  return (
    <Container>
      <Cover>
        <SeatStatus onClick={onClickSeat} seatColor={seatColor} />
        <SeatSelector selected={selected} name={name} setName={setName} clickEvent={onClickReservation}
        />
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
