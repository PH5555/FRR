import React from "react";
import {
  Link,
  useLocation
} from "react-router-dom";
import {
  RoomReservationDomain,
  ItemReservationDomain
} from "../constants/domain";
import { Logo } from "../components/Logo";
import styled from "styled-components";

export const Header = () => {
  const location = useLocation();
  const bg = location.pathname === ItemReservationDomain ? "#000" : "none";
  return (
    <Container bg={bg}>
      <LogoCover to={'/'}>
        <Logo/>
      </LogoCover>
      <NavCover>
        <Text to={RoomReservationDomain} color={location.pathname === RoomReservationDomain ? "#FF3939" : "#FFFFFF"}>
          자리 예약
        </Text>
        <Text to={ItemReservationDomain} color={location.pathname === ItemReservationDomain ? "#FF3939" : "#FFFFFF"}>
          물품 예약
        </Text>
      </NavCover>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: auto 0;
  width: 100%;
  z-index: 3;
  background-color: ${props => props.bg};
`;

const NavCover = styled.div`
  display: flex;
  margin: auto 0 auto 130px;
  width: fit-content;
  justify-content: space-between;
`;

const Text = styled(Link)`
  font-size: 13px;
  margin: auto 40px;
  width: 100%;
  text-decoration: none;
  color: ${props => props.color};

  &:hover {
    cursor: pointer;
    color: #FF3939;
    transition: all 1s;
  }
`;

const LogoCover = styled(Link)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;