import React from "react";
import {
  dummyTimeTable,
  time
} from "../constants/sample";
import { TimeBox } from "../components/TimeBox";
import styled from "styled-components";

export const TimeTable = (props) => {
  const {item} = props;
  const timeTable = item.timeTable ? item.timeTable : dummyTimeTable;
  const timeList = time.map((t, i) => {
    const r = (10 + i) % 12;
    return r === 0 ? 12 : r;
  });
  return (
    <Container>
      <div>
        <Time/>
        {timeList.map((t, i) => <Time key={i}>{t}</Time>)}
      </div>
      <Box>
        <Day>월</Day>
        <Day>화</Day>
        <Day>수</Day>
        <Day>목</Day>
        <Day>금</Day>
        {timeTable.mon.map((t, i) => <TimeBox key={i} selected={false} reserved={t}/>)}
        {timeTable.tue.map((t, i) => <TimeBox key={i} selected={false} reserved={t}/>)}
        {timeTable.wed.map((t, i) => <TimeBox key={i} selected={false} reserved={t}/>)}
        {timeTable.thu.map((t, i) => <TimeBox key={i} selected={false} reserved={t}/>)}
        {timeTable.fri.map((t, i) => <TimeBox key={i} selected={false} reserved={t}/>)}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: fit-content;
  border: 4px solid #282828;
  border-radius: 15px;
`;

const Day = styled.div`
  display: flex;
  background-color: transparent;
  border: 2px solid #282828;
  width: 101px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

const Time = styled.div`
  display: flex;
  background-color: transparent;
  border: 2px solid #282828;
  width: 30px;
  height: 35px;
  justify-content: end;
  font-size: 12px;
  padding: 3px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;