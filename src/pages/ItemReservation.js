import React, {
  useEffect,
  useState
} from "react";
import {
  useItemDispatch,
  useItemState
} from "../context/itemContext";
import {
  getFacultyInfo,
  reserveFaculty,
  resetFaculty,
  resetSeat
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
  
  const state = useItemState();
  const dispatch = useItemDispatch();
  const [itemList, setItemList] = useState(state);
  
  const fetch = async () => {
    const newItems = await getFacultyInfo();
    console.log(newItems)
    dispatch({type: 'GET_ITEMS', data: newItems});
  };
  
  useEffect(() => {
    fetch();
  }, []);
  
  useEffect(() => {
    setItemList(state);
  }, [state]);
  
  const onClickTable = (day, time) => {
    // todo - 물품(item) 선택 안되었을때 시간표 누르면 선택 안되도록 수정
    selectedItem === "" ? alert("물품 먼저 선택해주세요.") : setSelectedTime(selectedTime.concat({day, time}));
  };
  
  const onClickItem = (name) => {
    const i = itemList.find((i) => i.name === name);
    dispatch({type: 'RESET', data: itemList});
    setSelectedItem(i);
    setSelectedTime([]);
    // setReservedTime([]);
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
    dispatch({type: 'UPDATE_ITEM', data: {item: selectedItem, time: selectedTime}});
    const reserved = reservedTime.concat(selectedTime);
    setReservedTime(reserved);
    setSelectedTime([]);
    
    const dateTime = {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: []
    }
    reserved.forEach(t => dateTime[t.day].push(t.time));
    reserveFaculty(name, dateTime, selectedItem.name);
  };
  
  const onReset = () => {
    setName('');
  };
  
  return (
    <Container>
      <Items>
        {itemList.map((item, i) => (<Item key={i} item={item} onClick={onClickItem}/>))}
      </Items>
      <TimeTableBox>
        <SelectCover>
          <Text>선택한 물품: </Text>
          <TextBoxWithBorder text={selectedItem.name}/>
        </SelectCover>
        <Text style={{marginBottom: "20px"}}>사용날짜 선택: </Text>
        <TimeTable
          item={selectedItem}
          table={selectedItem.timeTable}
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
  padding: 15px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px 30px 20px 10px;

  @media (max-width: 1600px) {
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
  margin-bottom: 20px;
`;

const InputCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin: 20px 0;
`;
