import React, {
  useState,
  useEffect
} from "react";
import { Square } from "../components/Square";

export const Seat = (props) => {
  const {seatNumber, name, state, onClick} = props;
  const [color, setColor] = useState("#FFFFFF");
  const getColor = () => {
    if (state === 'reserved') {
      return "#282828";
    }
    if (state === 'none') {
      return "#FFFFFF";
    }
    if (state === 'selected') {
      return "#FF3939";
    }
    return "#FFFFFF";
  };
  
  useEffect(() => {
    setColor(getColor());
  }, [state]);
  
  const onClickSeat = () => {
    onClick(seatNumber, name);
  }
  
  return (
    <div onClick={onClickSeat}>
      <Square size={50} color={color}/>
    </div>
  );
}