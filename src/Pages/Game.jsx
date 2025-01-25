// Core Module.........
import React from "react";
// External Module...........
import { useDispatch, useSelector } from "react-redux";
// Local Module.......
import Cantener from "../Container/Container";
import FFgame from "../components/FFgame";
import FFsummary from "../components/FFsummary";
import FFamount from "../components/FFamount";
// import store actions local module...........
import { ffgameActions } from "../Store/ffgameSlice";
import { ffamountActions } from "../Store/ffamountSlice";

// Function...........
export default function Game() {
  const dispatch = useDispatch();
  const ffNumber = useSelector((state) => state.ffgameSlice);
  const ffAmount = useSelector((state) => state.ffamountSlice);

  const onButtonClick = (event) => {
    // if condistion appy for state in store ffgame and ffamount...........
    if (event === "Clear") {
      dispatch(ffgameActions.clearItems(event));
    } else if (event === "Done") {
      console.log(event);
      dispatch(ffamountActions.addItems(ffNumber));
    } else {
      dispatch(ffgameActions.addItems(event));
    }
  };
  return (
    <Cantener>
      <div className="row">
        {" "}
        <FFgame inputValue={ffNumber} onButtonClick={onButtonClick} />
        <FFamount summaryValue={ffAmount} />
      </div>
      <FFsummary />
    </Cantener>
  );
}
