import React, { useState, useEffect } from "react";
import { Table } from "../components/Table";
import { Square } from "../components/Square";
import styled from "styled-components";

export const SeatStatus = (props) => {


  // todo - db에서 자리 현황 데이터 가져와서 그거에 맞게 뿌려줘야하는데 어떻게 내려올지 아직 잘 모르겠음
  // todo - 자리 현황 데이터가 있으면 그 현황에 맞게 자리 색 달라지게 구현 : 현재 디폴트값은 예약 안된 #fff로 되어있음

  const {onClick, seatColor} = props
  const color = ["#FFFFFF", "#282828", "#FF3939"]

  return (
    <Container>
      <ExplainCover>
        <SquareBox>
          <Square size={30} color={color} hover={false} id='0'/>
          <div>예약 가능한 좌석</div>
        </SquareBox>
        <SquareBox>
          <Square size={30} color={color} hover={false} id='1'/>
          <div>예약된 좌석</div>
        </SquareBox>
        <SquareBox>
          <Square size={30} color={color} hover={false} id='2'/>
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
              <Square key="A1" id ="0" clickEvent={onClick} size={50} color={seatColor}/>
              <Square key="B1" id ="1" clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
          </TableCover>
          <TableCover>
            <Chair>
              {/*A2, B2 자리*/}
              <Square key="A2" id ="2" clickEvent={onClick} size={50} color={seatColor}/>
              <Square key="B2" id ="3" clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
            <Table size={"large"}/>
            <Chair>
              {/*A3, B3 자리*/}
              <Square key="A3" id = "4" clickEvent={onClick} size={50} color={seatColor}/>
              <Square key="B3" id = "5"  clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
          </TableCover>
          <TableCover>
            <Chair>
              {/*A4, B4 자리*/}
              <Square key="A4" id = "6" clickEvent={onClick} size={50} color={seatColor}/>
              <Square key="B4" id = "7" clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
            <Table size={"large"}/>
            <Chair>
              {/*A5, B5 자리*/}
              <Square key="A5" id = "8" clickEvent={onClick} size={50} color={seatColor}/>
              <Square key="B5" id = "9" clickEvent={onClick} size={50} color={seatColor}/>
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

  