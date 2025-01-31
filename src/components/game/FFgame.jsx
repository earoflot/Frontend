// Import Local Modules.............
import FFnumber from "./FFnumber";
import FFamount from "./FFamount";
import FFyouresult from "./FFyouresult";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import store actions local module...........
import { ffgameActions } from "../../store/game/ffgameSlice";

const FFgame = () => {
  // useDispatch on react-redux store.............
  const dispatch = useDispatch();
  const ffNumber = useSelector((state) => state.ffgameSlice);
  // it is state use for only components use and get the data
  const [getNumber, setNumber] = useState();
  const [getAmount, setAmount] = useState();
  // it is Number click function...............
  const onButtonClick = (button) => {
    // if condistion appy for state in store ffgame and ffamount...........
    if (button === "Clear") {
      dispatch(ffgameActions.clearItems(button));
    } else if (button === "Done") {
      setNumber(ffNumber);
    } else {
      dispatch(ffgameActions.addItems(button));
    }
  };
  // it is FF Game Amount click function.................
  const onAmountButton = (amout) => {
    if (amout === "Submit") {
    } else {
      setAmount(amout);
    }
  };

  return (
    <>
      <FFnumber inputValue={ffNumber} onButtonClick={onButtonClick} />

      <FFamount numValue={getNumber} onAmountButton={onAmountButton} />
      <FFyouresult />
    </>
  );
};

export default FFgame;
