import React from "react";
import styled from "styled-components";
import { ReactComponent as PandaSvg } from "../assets/panda.svg";
import room from "../assets/room2.png";

export const Home = () => {
  return (
    <Container>
      <TextCover>
        <MainText>
          Forif Room Reservation
        </MainText>
        <Text>
          FRRRRRRRRRR
        </Text>
      </TextCover>
      <PandaCover>
        <PandaSvg/>
      </PandaCover>
      <Grey/>
      <Img src={room}/>
    </Container>
  );
}

const Grey = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
`;

const Img = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: auto;
  z-index: 2;
`;

const TextCover = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin: auto 0 50px 0;
  z-index: 3;
  justify-content: center;
`;

const MainText = styled.div`
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;
  letter-spacing: 0.05em;
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.05em;
`;

const PandaCover = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-right: 300px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
`;