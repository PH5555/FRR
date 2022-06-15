import React, {
  useState,
  useEffect
} from "react";
import { SeatSelector } from "../components/SeatSelector";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";
import {
  getSeatInfo,
  reserveSeat,
  deleteSeat
} from "../firebase";

const seatData = ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'];

export const RoomReservation = () => {
  const promise = getSeatInfo();
  const getData = () => {
    promise.then((appData) => {
      for (let i = 0; i < appData.length; i++) {
        if (appData[i].seatNumber === '0') {
          seatData[0] = "#282828";
        }
        if (appData[i].seatNumber === '1') {
          seatData[1] = "#282828";
        }
        if (appData[i].seatNumber === '2') {
          seatData[2] = "#282828";
        }
        if (appData[i].seatNumber === '3') {
          seatData[3] = "#282828";
        }
        if (appData[i].seatNumber === '4') {
          seatData[4] = "#282828";
        }
        if (appData[i].seatNumber === '5') {
          seatData[5] = "#282828";
        }
        if (appData[i].seatNumber === '6') {
          seatData[6] = "#282828";
        }
        if (appData[i].seatNumber === '7') {
          seatData[7] = "#282828";
        }
        if (appData[i].seatNumber === '8') {
          seatData[8] = "#282828";
        }
        if (appData[i].seatNumber === '9') {
          seatData[9] = "#282828";
        }
      }
      setSeatColor({...seatData});
    });
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');
  const [seatColor, setSeatColor] = useState(seatData);
  const [button, setButton] = useState('예약하기');
  
  const onClickSeat = (event, id) => {
    if (selected !== '' && selected !== id) {
      alert("좌석은 1개만 선택 가능합니다.");
      return;
    }
    
    if (seatColor[id] === "#282828") {
      setSelected(id);
      setButton('취소하기');
      const deleteName = prompt("취소하려면 이름을 입력하세요", '');
      setName(deleteName);
      if (deleteName === '') {
        setSelected('');
      }
      return;
    }
    
    setButton('예약하기');
    const newArr = seatColor;
    newArr[id] = (newArr[id] === '#fff' ? '#FF3939' : '#fff');
    setSeatColor(newArr);
    setSelected(id);
    if (seatColor[id] === "#fff") {
      setSelected('');
    }
  };
  
  const onClickReservation = async () => {
    if (selected === '' || name === '') {
      alert("좌석과 이름 모두 입력해주세요.");
      return;
    }
    
    if (button === '예약하기') {
      reserveSeat(name, selected);
      seatColor[selected] = "#282828";
      alert("예약되었습니다. 사용 종료 후 꼭 취소하기를 눌러주세요.")
    }
    
    if (button === '취소하기') {
      try {
        await deleteSeat(name, selected);
        alert("취소되었습니다.");
        seatColor[selected] = "#fff";
      } catch (e) {
        alert(e)
      }
    }
    
    setSelected('');
    setName('');
  };
  
  return (
    <Container>
      <Cover>
        <SeatStatus onClick={onClickSeat} seatColor={seatColor}/>
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
