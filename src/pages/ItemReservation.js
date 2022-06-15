import React, {
  useEffect,
  useState
} from "react";
import {
  getFacultyInfo,
  reserveFaculty
} from "../firebase";
import { TimeTable } from "../components/TimeTable";
import { Button } from "../components/Button";
import { TextBoxWithBorder } from "../components/TextBoxWithBorder";
import { Item } from "../components/Item";
import styled from "styled-components";

export const ItemReservation = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [reservedTime, setReservedTime] = useState([]);
  const [name, setName] = useState("");
  const [items, getItems] = useState([]);
  
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
      getItems(elements);
    });
  }, []);
  
  const onClickTable = (day, time) => {
    selectedItem === ""
      ? alert("물품 먼저 선택해주세요.")
      : setSelectedTime(selectedTime.concat({day, time}));
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
    if (name === "") {
      alert("신청자 이름을 입력해주세요");
      return;
    }
    
    if (selectedTime.length === 0) {
      alert("시간을 선택해주세요");
      return;
    }
    setReservedTime(selectedTime);
    
    const setTimeIndex = (data, date) => {
      const timeIndexList = [];
      
      selectedTime.map((time) => {
        if (time.day === date && !timeIndexList.includes(time.time)) {
          timeIndexList.push(time.time);
        }
      });
      
      data.map((reserveFact, i) => {
        if (reserveFact && !timeIndexList.includes(i)) {
          timeIndexList.push(i);
        }
      });
      return timeIndexList;
    };
    
    const editDatetime = {
      mon: setTimeIndex(selectedItem.dateTime.mon.reserved, "mon"),
      tue: setTimeIndex(selectedItem.dateTime.tue.reserved, "tue"),
      wed: setTimeIndex(selectedItem.dateTime.wed.reserved, "wed"),
      thu: setTimeIndex(selectedItem.dateTime.thu.reserved, "thu"),
      fri: setTimeIndex(selectedItem.dateTime.fri.reserved, "fri"),
    };
    reserveFaculty(String(name), editDatetime, String(selectedItem.name));
  };
  
  const onReset = () => {
    setName('');
  }
  
  return (
    <Container>
      <Items>
        {items.map((item, i) => (
          <Item key={i} item={item} onClick={onClickItem}/>
        ))}
      </Items>
      <TimeTableBox>
        <SelectCover>
          <Text>선택한 물품: </Text>
          <TextBoxWithBorder text={selectedItem.name}/>
        </SelectCover>
        <Text style={{marginBottom: "20px"}}>사용날짜 선택: </Text>
        <TimeTable
          item={selectedItem}
          selectedTime={selectedTime}
          reservedTime={reservedTime}
          onClick={onClickTable}
        />
        <InputCover>
          <Text>신청자 이름: </Text>
          <TextBoxWithBorder text={name} onChange={onChange} onReset={onReset}/>
        </InputCover>
        <Button text="예약하기" onClick={onClickReservation}/>
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

  @media (max-width: 1528px) {
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
