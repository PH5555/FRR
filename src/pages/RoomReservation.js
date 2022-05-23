import React from "react";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";

export const RoomReservation = () => {
  return (
    <Container>
      <Cover>
        <SeatStatus/>
        <Select>
          여기 선택창 들어감
        </Select>
      </Cover>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Cover = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #000000;
  width: 100%;
  height: 627px;
  margin-top: 320px;
  z-index: 1;
  padding: 90px 0;
`;

const Select = styled.div``;