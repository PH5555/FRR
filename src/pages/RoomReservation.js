import React from "react";
import { SeatSelector } from "../components/SeatSelector";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";

export const RoomReservation = () => {
  return (
    <Container>
      <Cover>
        <SeatStatus/>
        <SeatSelector/>
      </Cover>
    </Container>
  );
}

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
