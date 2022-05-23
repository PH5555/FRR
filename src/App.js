import React from "react";
import styled from "styled-components";
import { GlobalCSS } from "./components/GlobalCSS";
import { RootRouter } from "./routers/RootRouter";

const App = () => {
  return (
    <Container>
      <RootRouter/>
      <GlobalCSS/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
`;