import React from "react";
import { Routes } from "react-router";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { RoomReservation } from "../pages/RoomReservation";
import { ItemReservation } from "../pages/ItemReservation";
import { Header } from "../components/Header";
import {
  ItemReservationDomain,
  RoomReservationDomain
} from "../constants/domain";

export const RootRouter = () => {
  return (<BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path={RoomReservationDomain} element={<RoomReservation/>}/>
        <Route exact path={ItemReservationDomain} element={<ItemReservation/>}/>
      </Routes>
    </BrowserRouter>);
}