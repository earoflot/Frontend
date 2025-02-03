// Import External Module. configruasion..........
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import store actions local module...........
import { ffnumberActions } from "../../store/game/ffnumberSlice";
// Import Local Modules.............
import FFnumber from "./FFnumber";
import Container from "../../Container/Container";
import styles from "./styles/FFgame.module.css";
import FFamount from "./FFamount";

const FFgame = () => {
  const dispatch = useDispatch();
  // Number value button function..........
  let [getNumber, setNumber] = useState([]);
  // it is Number click function...............
  const onButtonClick = (button) => {
    setNumber([button]);
  };

  const clearButton = () => {
    setNumber([]);
  };
  const doneButton = () => {
    dispatch(ffnumberActions.doneItems(getNumber));
  };

  return (
    <div className="row p-0 m-0">
      <div className="col-8 p-0 m-0">
        <FFnumber
          onButtonClick={onButtonClick}
          numValue={getNumber}
          clearButton={clearButton}
          doneButton={doneButton}
        />
      </div>
      <div className="col-4 p-0 m-0">
        <FFamount />
      </div>
    </div>
  );
};

export default FFgame;
