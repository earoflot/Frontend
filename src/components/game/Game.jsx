// Core Module.........
import React from "react";
// External Module...........

// Local Module.......
import Cantener from "../../Container/Container";
import FFgame from "./FFgame";

// import store actions local module...........

// Function...........
export default function Game() {
  return (
    <Cantener>
      <div className="row">
        <FFgame />
      </div>
    </Cantener>
  );
}
