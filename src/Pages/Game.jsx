// Core Module.........
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Local Module.......
import Cantener from "../Container/Container";
import FFgame from "../Components/FFgame";
import FFstatus from "../Components/FFstatus";
import { gameActions } from "../Store/gameSlice";

// Function...........
export default function Game() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.gameSlice);

  const onButtonClick = (event) => {
    dispatch(gameActions.addItems(event));
  };
  return (
    <Cantener>
      <div className="row">
        {" "}
        <FFgame inputValue={value} onButtonClick={onButtonClick} />
        <FFstatus />
      </div>
    </Cantener>
  );
}
