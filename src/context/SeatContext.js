import React, {
  createContext,
  useContext,
  useReducer
} from 'react';

const initialState = [];

const init = () => {
  return initialState;
};

const seatReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SEATS': {
      return action.data;
    }
    case 'RESERVE_SEAT': {
      const personName = action.data.name;
      const seatNumber = action.data.seatNumber;
      return state.concat({personName, seatNumber});
    }
    case 'CANCEL_SEAT': {
      return state.filter(seat => seat.seatNumber !== action.data);
    }
    default:
      return state;
  }
};

export const SeatState = createContext();
export const SeatDispatch = createContext();

export const useSeatState = () => {
  return useContext(SeatState);
};

export const useSeatDispatch = () => {
  return useContext(SeatDispatch);
};

export const SeatProvider = ({children}) => {
  const [state, dispatch] = useReducer(seatReducer, initialState, init);
  return (
    <SeatState.Provider value={state}>
      <SeatDispatch.Provider value={dispatch}>{children}</SeatDispatch.Provider>
    </SeatState.Provider>
  );
};
