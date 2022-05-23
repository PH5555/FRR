import React from "react";
import { Item } from "../components/Item";
import styled from "styled-components";
import img from "../assets/sample.png";

export const ItemReservation = () => {
  const timeTable = Array(5).fill(Array(13).fill(false));
  console.log(timeTable)
  const item = {
    name: '보드게임 - 화투',
    img,
    timeTable
  }
  const items = Array(12).fill(item);
  
  return (
    <Container>
      <Items>
        {items.map((item, i) => <Item key={i} item={item}/>)}
      </Items>
      <TimeTableBox>
      
      </TimeTableBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #000000;
  z-index: 1;
  height: 100%;
  padding: 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const TimeTableBox = styled.div`

`;