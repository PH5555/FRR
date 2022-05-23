import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import { Header } from "../components/Header";
import {
  ItemReservationDomain,
  RoomReservationDomain
} from "../constants/domain";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path={RoomReservationDomain}>
      </Route>
      <Route exact path={ItemReservationDomain}>
      </Route>
    </BrowserRouter>
  );
}