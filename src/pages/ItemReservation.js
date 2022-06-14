import React, { useEffect, useState } from "react";
import { itemData } from "../constants/sample";
import { TimeTable } from "../components/TimeTable";
import { Button } from "../components/Button";
import { TextBoxWithBorder } from "../components/TextBoxWithBorder";
import { Item } from "../components/Item";
import styled from "styled-components";
import { getFacultyInfo, reserveFaculty } from "../firebase";

export const ItemReservation = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [reservedTime, setReservedTime] = useState([]);
  const [name, setName] = useState("");
  const [items, getitems] = useState([]);

  const onClickTable = (day, time) => {
    // todo - 물품(item) 선택 안되었을때 시간표 누르면 선택 안되도록 수정
    selectedItem === ""
      ? alert("물품 먼저 선택해주세요.")
      : setSelectedTime(selectedTime.concat({ day, time }));
  };

  const onClickItem = (name) => {
    const i = items.find((i) => i.name === name);
    setSelectedItem(i);
    setSelectedTime([]);
    setReservedTime([]);
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  const onClickReservation = () => {
    // todo - 예약하기 버튼 눌렀을 때 기능 구현
    if (name === "") {
      alert("신청자 이름을 입력해주세요");
      return;
    }

    if (selectedTime.length === 0) {
      alert("시간을 선택해주세요");
      return;
    }
    setReservedTime(selectedTime);

    const giveNumber = (data, date) => {
      const empty = [];

      selectedTime.map((time) => {
        if (time.day == date && !empty.includes(time.time)) {
          empty.push(time.time);
        }
      });

      data.map((reserveFact, i) => {
        if (reserveFact && !empty.includes(i)) {
          empty.push(i);
        }
      });
      return empty;
    };
    const editDatetime = {
      mon: giveNumber(selectedItem.dateTime.mon.reserved, "mon"),
      tue: giveNumber(selectedItem.dateTime.tue.reserved, "tue"),
      wed: giveNumber(selectedItem.dateTime.wed.reserved, "wed"),
      thu: giveNumber(selectedItem.dateTime.thu.reserved, "thu"),
      fri: giveNumber(selectedItem.dateTime.fri.reserved, "fri"),
    };
    console.log([String(name)], editDatetime, String(selectedItem.name));
    reserveFaculty([String(name)], editDatetime, String(selectedItem.name));
  };

  const fillTrueFalse = (data) => {
    const arrayTrueFalse = Array(13).fill(false);
    for (const dateBlock of data) {
      arrayTrueFalse[dateBlock] = true;
    }
    return arrayTrueFalse;
  };
  useEffect(() => {
    getFacultyInfo().then((elements) => {
      elements.map((element) => {
        console.log(element.personName, element.dateTime, element.name);
        element.dateTime = {
          mon: {
            reserved: fillTrueFalse(element.dateTime.mon),
            selected: Array(13).fill(false),
          },
          tue: {
            reserved: fillTrueFalse(element.dateTime.tue),
            selected: Array(13).fill(false),
          },
          wed: {
            reserved: fillTrueFalse(element.dateTime.wed),
            selected: Array(13).fill(false),
          },
          thu: {
            reserved: fillTrueFalse(element.dateTime.thu),
            selected: Array(13).fill(false),
          },
          fri: {
            reserved: fillTrueFalse(element.dateTime.fri),
            selected: Array(13).fill(false),
          },
        };
      });
      getitems(elements);
    });
  }, []);

  return (
    <Container>
      <Items>
        {items.map((item, i) => (
          <Item key={i} item={item} onClick={onClickItem} />
        ))}
      </Items>
      <TimeTableBox>
        <SelectCover>
          <Text>선택한 물품: </Text>
          <TextBoxWithBorder text={selectedItem.name} />
        </SelectCover>
        <Text style={{ marginBottom: "20px" }}>사용날짜 선택: </Text>
        <TimeTable
          item={selectedItem}
          selectedTime={selectedTime}
          reservedTime={reservedTime}
          onClick={onClickTable}
        />
        <InputCover>
          <Text>신청자 이름: </Text>
          <TextBoxWithBorder text={name} onChange={onChange} />
        </InputCover>
        <Button text="예약하기" onClick={onClickReservation} />
      </TimeTableBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #000000;
  z-index: 1;
  min-height: 1080px;
  min-width: 1090px;
  padding: 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px 30px 20px 10px;

  @media (max-width: 1528px) {s
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1345px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TimeTableBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  margin-right: 150px;
`;

const Text = styled.div`
  font-weight: 700;
`;

const SelectCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 30px;
`;

const InputCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin: 30px 0;
`;
