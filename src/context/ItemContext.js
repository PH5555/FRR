import React, {
  createContext,
  useContext,
  useReducer
} from 'react';
import {
  dayList,
  dummyTimeTable
} from "../constants/index";

const initialState = [{name: '', img: '', timeTable: dummyTimeTable()}];

const init = () => {
  return initialState;
};

const setTimeTable = (timeTable) => {
  const newTimeTable = dummyTimeTable();
  
  dayList.forEach(day => {
    timeTable[day].forEach(v => {
      newTimeTable[day].reserved[v] = true;
    })
  })
  return newTimeTable;
};

const resetSelected = (state) => {
  return state.map(s => {
    dayList.forEach(day => s.timeTable[day].selected = Array(13).fill(false));
    return s;
  });
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ITEMS': {
      return action.data.map((data) => {
        return {
          img: data.image,
          name: data.name,
          timeTable: setTimeTable(data.dateTime)
        };
      });
    }
    case 'UPDATE_ITEM': {
      let index;
      state.forEach((item, i) => {
        if (item.name === action.data.item.name) {
          index = i;
        }
      });
      const newTable = state[index].timeTable;
      action.data.time.map((data) => {
        newTable[data.day].reserved[data.time] = true;
      });
      state[index].timeTable = newTable;
      return state;
    }
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
