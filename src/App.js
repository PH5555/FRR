import React from "react";
import roomImg from "./assets/roomImg.png";
import styled from "styled-components";
import { GlobalCSS } from "./components/GlobalCSS";
import { RootRouter } from "./routers/RootRouter";

const App = () => {
  return (
    <Container>
      <RootRouter/>
      <MainImage src={roomImg}/>
      <GlobalCSS/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainImage = styled.img`
  width: 100%;
  height: 1080px;
  position: absolute;
  z-index: 0;
  opacity: 0.5;
  left: 0;
`;