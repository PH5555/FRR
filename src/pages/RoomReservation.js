import React, {
  useState,
  useEffect
} from "react";
import {
  useSeatDispatch,
  useSeatState
} from "../context/SeatContext";
import {
  getSeatInfo,
  reserveSeat
} from "../firebase";
import { SeatSelector } from "../components/SeatSelector";
import { SeatStatus } from "../components/SeatStatus";
import styled from "styled-components";

export const RoomReservation = () => {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState('');
  
  const state = useSeatState();
  const dispatch = useSeatDispatch();
  const [seatList, setSeatList] = useState(state);
  const [fetched, setFetched] = useState(false);
  
  const fetch = async () => {
    const seats = await getSeatInfo();
    dispatch({type: 'GET_SEATS', data: seats});
  };
  
  useEffect(() => {
    if (!fetched) {
      fetch();
      setFetched(true);
    }
  }, []);
  
  useEffect(() => {
    setSeatList(state);
  }, [state]);
  
  const onClickReservation = () => {
    dispatch({type: 'RESERVE_SEAT', data: {name: name, seatNumber: selected}});
    setSelected('');
    setName('');
    reserveSeat(name, selected);
  };
  
  return (
    <Container>
      <Cover>
        <SeatStatus
          selected={selected}
          setSelected={setSelected}
          reserved={seatList}
        />
        <SeatSelector selected={selected} name={name} setName={setName} clickEvent={onClickReservation}/>
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
