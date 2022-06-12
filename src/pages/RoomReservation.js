import React, { useState, useEffect } from "react";
import { SeatSelector } from "../components/SeatSelector";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";
import { getSeatInfo, reserveSeat } from "../firebase";

//데이터를 불러와서 비교한 다음에 색깔은 바뀌는데 이게 바로 첫 화면에 적용이 안 되고 다른데를 눌러야 적용이 됩니다! 이걸 고쳐야 할 것 같아여...
export const RoomReservation = () => {
let SeatData =['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'];
const promise = getSeatInfo();
const getData = () => {
promise.then((appData) => {
  for(let i = 0 ; i < appData.length; i++){
    if(appData[i].seatNumber == 0){
      SeatData[0] = "#282828";
    }if(appData[i].seatNumber == 1){
      SeatData[1] = "#282828";
    }if(appData[i].seatNumber == 2){
      SeatData[2] = "#282828";
    }if(appData[i].seatNumber == 3){
      SeatData[3] = "#282828";
    }if(appData[i].seatNumber == 4){
      SeatData[4] = "#282828";
    }if(appData[i].seatNumber == 5){
      SeatData[5] = "#282828";
    }if(appData[i].seatNumber == 6){
      SeatData[6] = "#282828";
    }if(appData[i].seatNumber == 7){
      SeatData[7] = "#282828";
    }if(appData[i].seatNumber == 8){
      SeatData[8] = "#282828";
    }
  }
});
}


  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');
  const [seatColor, setseatColor] = useState(SeatData);
  const [button, setButton] = useState('예약하기');

  console.log(seatColor);
  const onClickSeat = (event, id) => {
    const changeId = id;
    if(selected !== '' && selected !== id) {
      alert("좌석은 1개만 선택 가능합니다.");
      return;
    }
    if (seatColor[id] == "#282828") {
      setSelected(changeId);
      setButton('취소하기');
      return;
    }
    setButton('예약하기');
    const newArr = seatColor;
    newArr[id] = (newArr[id] === '#fff' ? 'red' : '#fff');
    setseatColor(newArr);
    setSelected(changeId);
    if (seatColor[id] === "#fff"){
      setSelected('');
    }
  }
  useEffect(() => {

  }, [seatColor]);

  const onClickReservation = () => {
    if(button == '예약하기'){
  reserveSeat(name, selected);
    }if(button == '취소하기' && name == "user"){
  //예약취소 기능
  //사용자 이름 어케 비ㅛ교할까여..? ㅎㅎ 
    }
    }
  


  return (
    <Container>
      <Cover>
        <SeatStatus onClick={onClickSeat} seatColor={seatColor} />
        <SeatSelector button={button} selected={selected} name={name} setName={setName} clickEvent={onClickReservation}
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
