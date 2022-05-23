import React from "react";
import { TimeBox } from "../components/TimeBox";
import styled from "styled-components";

export const TimeTable = (props) => {
  const {item, selectedTime} = props;
  return (
    <Container>
      <Box>
        {/*{item.timeTable.map((day, i) => day.map((t, index) => {*/}
        {/*  const selected = selectedTime.*/}
        {/*  return <TimeBox selected={t} />*/}
        }))}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 555px;
  height: 517px;

  border: 5px solid #282828;
  border-radius: 15px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(80px, auto);
`;