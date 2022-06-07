import React, { useState, useEffect } from "react";
import { Table } from "../components/Table";
import { Square } from "../components/Square";
import styled from "styled-components";

export const SeatStatus = (props) => {


  // todo - db에서 자리 현황 데이터 가져와서 그거에 맞게 뿌려줘야하는데 어떻게 내려올지 아직 잘 모르겠음
  // todo - 자리 현황 데이터가 있으면 그 현황에 맞게 자리 색 달라지게 구현 : 현재 디폴트값은 예약 안된 #fff로 되어있음
  /*const setColor = () =>{
    if (True) {
      return "#282828";
    }
    if (False) {
      return {color};
    }
  }
*/

  // todo - 자리 예약했을때 자리 색 빨간색으로 바꾸도록 구현
  // 색깔 바꾸는 건 했는데 그게 전체가 다 바뀌더라고요 근데 자리별로 구분을 하는 방법을 못 찾겠어서요...ㅎㅎ... 우선 이렇게라도 예약된 것만 바뀌게 했습니다
  const {onClick, seatColor} = props
  //const [seatColor, setseatColor] = useState(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']);

  // const onClick = (event ,id) => {

  //   console.log(id);

  //   if (seatColor[id] === "#282828"){
  //     alert("이미 예약된 좌석입니다.")
  //   }
  //   else{
  //     let newArr = seatColor;
  //     newArr[id] = newArr[id] === '#fff' ? 'red' : '#fff';
  //     setseatColor(newArr);
  //     console.log(seatColor);
  //   }

    // if(seatColor[id] == '#fff')
    // {
    //   seatSelected[id] = "A1";
    //   console.log(seatSelected);
    // }
    // else{
    //   seatSelected[id] = null;
    // }
  //} 

  // useEffect(()=>{

  // }, [seatColor]);

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
              <Square id ="0" clickEvent={onClick} size={50} color={seatColor}/>
              <Square id ="1" clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
          </TableCover>
          <TableCover>
            <Chair>
              {/*A2, B2 자리*/}
              <Square id ="2" clickEvent={onClick} size={50} color={seatColor}/>
              <Square id ="3" clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
            <Table size={"large"}/>
            <Chair>
              {/*A3, B3 자리*/}
              <Square id = "4" clickEvent={onClick} size={50} color={seatColor}/>
              <Square id = "5"  clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
          </TableCover>
          <TableCover>
            <Chair>
              {/*A4, B4 자리*/}
              <Square id = "6" clickEvent={onClick} size={50} color={seatColor}/>
              <Square id = "7" clickEvent={onClick} size={50} color={seatColor}/>
            </Chair>
            <Table size={"large"}/>
            <Chair>
              {/*A5, B5 자리*/}
              <Square id = "8" clickEvent={onClick} size={50} color={seatColor}/>
              <Square id = "9" clickEvent={onClick} size={50} color={seatColor}/>
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

  