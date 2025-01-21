// Core Module.........
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Local Module.......
import Cantener from "../Container/Container";
import FFgame from "../Components/FFgame";
import FFsummary from "../Components/FFsummary";
import { gameActions } from "../Store/gameSlice";
import { gamesummaryActions } from "../Store/gamesummarySlice";

// Function...........
export default function Game() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.gameSlice);
  const valueSummary = useSelector((state) => state.gamesummarySlice);

  console.log(value);

  const onButtonClick = (event) => {
    console.log(value);
    if (event === "Clear") {
      dispatch(gameActions.clearItems(event));
    } else if (event === "Done") {
      console.log(event);
      dispatch(gamesummaryActions.addItems(value));
    } else {
      dispatch(gameActions.addItems(event));
    }
  };
  return (
    <Cantener>
      <div className="row">
        {" "}
        <FFgame inputValue={value} onButtonClick={onButtonClick} />
        <FFsummary summaryValue={valueSummary} />
      </div>
    </Cantener>
  );
}
