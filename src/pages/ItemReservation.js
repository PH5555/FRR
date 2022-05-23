import React, { useState } from "react";
import { itemData } from "../constants/sample";
import { TimeTable } from "../components/TimeTable";
import { Button } from "../components/Button";
import { TextBoxWithBorder } from "../components/TextBoxWithBorder";
import { Item } from "../components/Item";
import styled from "styled-components";

const items = itemData;
export const ItemReservation = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [name, setName] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);
  
  const onClickItem = (name) => {
    const i = items.find(i => i.name === name);
    setSelectedItem(i);
  }
  
  const onChange = (event) => {
    setName(event.target.value);
  }
  
  return (
    <Container>
      <Items>
        {items.map((item, i) => <Item key={i} item={item} onClick={onClickItem}/>)}
      </Items>
      <TimeTableBox>
        <SelectCover>
          <Text>선택한 물품: </Text>
          <TextBoxWithBorder text={selectedItem.name}/>
        </SelectCover>
        <Text style={{marginBottom: '20px'}}>사용날짜 선택: </Text>
        <TimeTable item={selectedItem} selectedTime={selectedTime}/>
        <InputCover>
          <Text>신청자 이름: </Text>
          <TextBoxWithBorder text={name} onChange={onChange}/>
        </InputCover>
        <Button text="예약하기"/>
      </TimeTableBox>
    </Container>
  );
}

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