import React, { useEffect, useState } from "react";
import { dummyTimeTable, emptyTime } from "../constants/index";
import { TimeBox } from "../components/TimeBox";
import styled from "styled-components";

export const TimeTable = (props) => {
  const { item, table, selectedTime, onClick } = props;
  const getTimeTable = () => {
    const t = table ? table : dummyTimeTable();

    selectedTime.map((time) => {
      t[time.day].selected[time.time] = true;
    });
    
    return t;
  };

  const [timeTable, setTimetable] = useState(getTimeTable());

  useEffect(() => {
    const t = getTimeTable();
    setTimetable(t);
  }, [table, item]);

  const timeList = emptyTime.map((t, i) => {
    const r = (10 + i) % 12;
    return r === 0 ? 12 : r;
  });
  return (
    <Container>
      <div>
        <Time />
        {timeList.map((t, i) => (
          <Time key={i}>{t}</Time>
        ))}
      </div>
      <Box>
        <Day>월</Day>
        <Day>화</Day>
        <Day>수</Day>
        <Day>목</Day>
        <Day>금</Day>
        <div>
          {timeTable.mon.reserved.map((t, i) => (
            <TimeBox
              key={i}
              day="mon"
              time={i}
              selected={timeTable.mon.selected[i]}
              reserved={t}
              onClick={onClick}
            />
          ))}
        </div>
        <div>
          {timeTable.tue.reserved.map((t, i) => (
            <TimeBox
              key={i}
              day="tue"
              time={i}
              selected={timeTable.tue.selected[i]}
              reserved={t}
              onClick={onClick}
            />
          ))}
        </div>
        <div>
          {timeTable.wed.reserved.map((t, i) => (
            <TimeBox
              key={i}
              day="wed"
              time={i}
              selected={timeTable.wed.selected[i]}
              reserved={t}
              onClick={onClick}
            />
          ))}
        </div>
        <div>
          {timeTable.thu.reserved.map((t, i) => (
            <TimeBox
              key={i}
              day="thu"
              time={i}
              selected={timeTable.thu.selected[i]}
              reserved={t}
              onClick={onClick}
            />
          ))}
        </div>
        <div>
          {timeTable.fri.reserved.map((t, i) => (
            <TimeBox
              key={i}
              day="fri"
              time={i}
              selected={timeTable.fri.selected[i]}
              reserved={t}
              onClick={onClick}
            />
          ))}
        </div>
      </Box>
    </Container>
  );
};

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
  width: 90px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const Time = styled.div`
  display: flex;
  background-color: transparent;
  border: 2px solid #282828;
  width: 30px;
  height: 30px;
  justify-content: end;
  font-size: 12px;
  padding: 3px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
