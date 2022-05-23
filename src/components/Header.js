import React from "react";
import { Logo } from "../components/Logo";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Logo/>
      <NavCover>
        <Text>
          자리 예약
        </Text>
        <Text>
          물품 예약
        </Text>
      </NavCover>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 8px 0 auto 0;
  width: 100%;
`;

const NavCover = styled.div`
  display: flex;
  margin: auto 0 auto 130px;
  width: fit-content;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 13px;
  margin: auto 40px;
  width: 100%;

  &:hover {
    cursor: pointer;
    color: #FF3939;
    transition: all 1s;
  }
`;