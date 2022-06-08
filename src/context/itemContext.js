import React, {
  createContext,
  useContext,
  useReducer
} from 'react';
import { dummyTimeTable } from "../constants/sample";

const initialState = [{name: '', img: '', timeTable: dummyTimeTable}];

const init = () => {
  return [{name: '', img: '', timeTable: dummyTimeTable}];
};

const setTimeTable = (timeTable) => {
  const newTimeTable = {
    mon: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    tue: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    wed: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    thu: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
    fri: {reserved: Array(13).fill(false), selected: Array(13).fill(false)},
  }
  
  timeTable.mon.forEach(v => {
    newTimeTable.mon.reserved[v] = true;
  });
  timeTable.tue.forEach(v => {
    newTimeTable.tue.reserved[v] = true;
  });
  timeTable.wed.forEach(v => {
    newTimeTable.wed.reserved[v] = true;
  });
  timeTable.thu.forEach(v => {
    newTimeTable.thu.reserved[v] = true;
  });
  timeTable.fri.forEach(v => {
    newTimeTable.fri.reserved[v] = true;
  });
  
  return newTimeTable;
};

const resetSelected = (state) => {
  return state.map(s => {
    s.timeTable.mon.selected = Array(13).fill(false);
    s.timeTable.tue.selected = Array(13).fill(false);
    s.timeTable.wed.selected = Array(13).fill(false);
    s.timeTable.thu.selected = Array(13).fill(false);
    s.timeTable.fri.selected = Array(13).fill(false);
    return s;
  });
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ITEMS': {
      const newState = action.data.map((data) => {
        return {
          img: data.image,
          name: data.name,
          timeTable: setTimeTable(data.dateTime)
        };
      });
      console.log(newState)
      return newState;
    }
    case 'UPDATE_ITEM':
      return state;
    case 'RESET': {
      return resetSelected(state);
    }
    default:
      return state;
  }
};

export const ItemState = createContext();
export const ItemDispatch = createContext();

export const useItemState = () => {
  return useContext(ItemState);
};

export const useItemDispatch = () => {
  return useContext(ItemDispatch);
};

export const ItemProvider = ({children}) => {
  const [state, dispatch] = useReducer(itemReducer, initialState, init);
  return (
    <ItemState.Provider value={state}>
      <ItemDispatch.Provider value={dispatch}>{children}</ItemDispatch.Provider>
    </ItemState.Provider>
  );
};
