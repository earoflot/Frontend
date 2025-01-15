import React from "react";
// Core Module.........
import Cantener from "../Container/Container";
// Local Module.......
import styles from "../styles/Game.module.css";
//
// Function...........
export default function Game() {
  return (
    <Cantener>
      <div className={styles.game}>
        <input className={styles.inputList} />
      </div>
    </Cantener>
  );
}
