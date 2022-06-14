import React, { useState, useEffect } from "react";
import { SeatSelector } from "../components/SeatSelector";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";
import { getSeatInfo, reserveSeat, deleteSeat } from "../firebase";

let SeatData = [
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
  "#fff",
];
let deleteName;

export const RoomReservation = () => {
  const promise = getSeatInfo();
  const getData = () => {
    console.log(promise);
    promise.then((appData) => {
      for (let i = 0; i < appData.length; i++) {
        if (appData[i].seatNumber == "0") {
          SeatData[0] = "#282828";
        }
        if (appData[i].seatNumber == "1") {
          SeatData[1] = "#282828";
        }
        if (appData[i].seatNumber == "2") {
          SeatData[2] = "#282828";
        }
        if (appData[i].seatNumber == "3") {
          SeatData[3] = "#282828";
        }
        if (appData[i].seatNumber == "4") {
          SeatData[4] = "#282828";
        }
        if (appData[i].seatNumber == "5") {
          SeatData[5] = "#282828";
        }
        if (appData[i].seatNumber == "6") {
          SeatData[6] = "#282828";
        }
        if (appData[i].seatNumber == "7") {
          SeatData[7] = "#282828";
        }
        if (appData[i].seatNumber == "8") {
          SeatData[8] = "#282828";
        }
        if (appData[i].seatNumber == "9") {
          SeatData[9] = "#282828";
        }
      }
      setseatColor({ ...SeatData });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");
  const [seatColor, setseatColor] = useState(SeatData);
  const [button, setButton] = useState("예약하기");

  const onClickSeat = (event, id) => {
    const changeId = id;
    if (selected !== "" && selected !== id) {
      alert("좌석은 1개만 선택 가능합니다.");
      return;
    }
    if (seatColor[id] == "#282828") {
      setSelected(changeId);
      setButton("취소하기");
      deleteName = prompt("취소하려면 이름을 입력하세요", null);
      setName(deleteName);
      if (deleteName == null) {
        setSelected("");
      }
      return;
    }
    setButton("예약하기");
    const newArr = seatColor;
    newArr[id] = newArr[id] === "#fff" ? "red" : "#fff";
    setseatColor(newArr);
    setSelected(changeId);
    if (seatColor[id] === "#fff") {
      setSelected("");
    }
  };

  const onClickReservation = () => {
    if (button == "예약하기") {
      if (selected == "" || name == "") {
        alert("좌석과 이름 모두 입력해주세요.");
        return;
      }

      reserveSeat(name, selected);
      seatColor[selected] = "#282828";

      alert("예약되었습니다. 사용 종료 후 꼭 취소하기를 눌러주세요.");
    }
    if (button == "취소하기") {
      if (selected == "" || name == "") {
        alert("좌석과 이름 모두 입력해주세요.");
        return;
      }
      deleteSeat(name, selected);
      alert("취소되었습니다.");
      seatColor[selected] = "#fff";
    }
    setSelected("");
    setName("");
  };

  return (
    <Container>
      <Cover>
        <SeatStatus onClick={onClickSeat} seatColor={seatColor} />
        <SeatSelector
          button={button}
          selected={selected}
          name={name}
          setName={setName}
          clickEvent={onClickReservation}
        />
      </Cover>
    </Container>
  );
};
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
