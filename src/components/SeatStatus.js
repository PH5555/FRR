import React from "react";
import { useSeatDispatch } from "../context/SeatContext";
import { Seat } from "../components/Seat";
import { Table } from "../components/Table";
import { Square } from "../components/Square";
import styled from "styled-components";

export const SeatStatus = (props) => {
  const {selected, setSelected, reserved} = props;
  const dispatch = useSeatDispatch();
  
  const onClickSeat = (seatNumber, name) => {
    if (seatNumber === selected) {
      setSelected('');
      return;
    }
    if (selected !== '') {
      alert("좌석은 1개만 선택 가능합니다.");
      return;
    }
    if (reserved.filter(seat => seat.seatNumber === seatNumber).length !== 0) {
      const input = prompt("예약을 취소하려면 신청 이름을 써주세요.");
      if (input === name) {
        alert("취소되었습니다.");
        dispatch({type: 'CANCEL_SEAT', data: seatNumber});
        // 취소 api
        return;
      }
      alert("신청자 이름이 일치하지 않습니다.");
      return;
    }
    
    setSelected(seatNumber);
  };
  
  const getState = (seatNo) => {
    if (selected === seatNo) return 'selected';
    const seat = reserved.filter(seat => seat.seatNumber === seatNo);
    if (seat.length === 0) {
      return 'none';
    }
    return 'reserved';
  };
  
  const getName = (seatNo) => {
    const seat = reserved.filter(seat => seat.seatNumber === seatNo);
    if (seat.length !== 0) {
      return seat[0].personName;
    }
    return '';
  }
  
  return (
    <Container>
      <ExplainCover>
        <SquareBox>
          <Square size={30} color="#FFFFFF" hover={false}/>
          <div>예약 가능한 좌석</div>
        </SquareBox>
        <SquareBox>
          <Square size={30} color="#282828" hover={false}/>
          <div>예약된 좌석</div>
        </SquareBox>
        <SquareBox>
          <Square size={30} color="#FF3939" hover={false}/>
          <div>예약한 좌석</div>
        </SquareBox>
      </ExplainCover>
      <Line/>
      <SeatContainer>
        <div style={{margin: '0 auto 30px auto'}}>예약하려면 좌석을 예약하세요</div>
        <SeatBox>
          <TableCover>
            <Chair style={{padding: 0}}>
              <ChairIndex>A</ChairIndex>
              <ChairIndex>B</ChairIndex>
            </Chair>
            <Table size={"small"}/>
            <Chair>
              {/*A1, B1 자리*/}
              <Seat seatNumber={0} name={getName(0)} state={getState(0)} onClick={onClickSeat}/>
              <Seat seatNumber={1} name={getName(1)} state={getState(1)} onClick={onClickSeat}/>
            </Chair>
          </TableCover>
          <TableCover>
            <Chair>
              {/*A2, B2 자리*/}
              <Seat seatNumber={2} name={getName(2)} state={getState(2)} onClick={onClickSeat}/>
              <Seat seatNumber={3} name={getName(3)} state={getState(3)} onClick={onClickSeat}/>
            </Chair>
            <Table size={"large"}/>
            <Chair>
              {/*A3, B3 자리*/}
              <Seat seatNumber={4} name={getName(4)} state={getState(4)} onClick={onClickSeat}/>
              <Seat seatNumber={5} name={getName(5)} state={getState(5)} onClick={onClickSeat}/>
            </Chair>
          </TableCover>
          <TableCover>
            <Chair>
              {/*A4, B4 자리*/}
              <Seat seatNumber={6} name={getName(6)} state={getState(6)} onClick={onClickSeat}/>
              <Seat seatNumber={7} name={getName(7)} state={getState(7)} onClick={onClickSeat}/>
            </Chair>
            <Table size={"large"}/>
            <Chair>
              {/*A5, B5 자리*/}
              <Seat seatNumber={8} name={getName(8)} state={getState(8)} onClick={onClickSeat}/>
              <Seat seatNumber={9} name={getName(9)} state={getState(9)} onClick={onClickSeat}/>
            </Chair>
          </TableCover>
        </SeatBox>
      </SeatContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExplainCover = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 10px;
  padding: 0 90px;
`

const SquareBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;

  > div {
    margin-top: 5px;
  }
`;

const ChairIndex = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
`;

const Line = styled.div`
  border: 1px solid #FFFFFF;
  transform: rotate(-0.09deg);
  margin: 0 20px;
`;

const SeatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 30px 30px auto;
`;

const TableCover = styled.div`
  display: flex;
  margin: auto 20px;
`;

const SeatBox = styled.div`
  display: flex;
`;


const Chair = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
`;

  