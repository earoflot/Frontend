import React from "react";
import { useState } from "react";
// Core Module.........
import Cantener from "../Container/Container";

// Local Module.......
import styles from "../styles/Game.module.css";
import FFgame from "../Components/FFgame";
import FFstatus from "../Components/FFstatus";
//
// Function...........
export default function Game() {
  const [value, setValue] = useState("45");
  const buttonName = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "Clear",
    "0",
    "Done",
  ];
  const onButtonClick = (event) => console.log(event);
  return (
    <Cantener>
      <div className="row">
        {" "}
        <FFgame
          inputValue={value}
          buttonValue={buttonName}
          onButtonClick={onButtonClick}
        />
        <FFstatus />
      </div>
    </Cantener>
  );
}
