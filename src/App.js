import React from "react";
import styled from "styled-components";
import {GlobalCSS} from "./components/GlobalCSS";

const App = () => {
  return (
    <Container>
      <GlobalCSS />FRR
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
`;