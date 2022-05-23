import React from "react";
import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import styled from "styled-components";

export const Logo = () => {
  return (
    <LogoCover>
      <LogoSvg/>
      <VLine/>
      <LogoTextBox>
        <MainText>FRR</MainText>
        <Text>Forif Room Reservation page</Text>
      </LogoTextBox>
    </LogoCover>
  )
}

const LogoCover = styled.div`
  display: flex;
  margin: auto 0 auto 28px;
`;

const VLine = styled.div`
  border: 1px solid #FFFFFF;
  transform: rotate(90deg);
  height: 100%;
  width: 27px;
  margin: auto;
`;

const LogoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0 auto 15px;
`;

const MainText = styled.div`
  font-family: "Arial Black", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
`;

const Text = styled.div`
  font-size: 11px;
`;
