// Core Module...........
import { useState } from "react";
// Import External Module...........
import { useDispatch } from "react-redux";
// Import Local Store Slice Module...........
import { ffnumberActions } from "../../store/game/ffnumberSlice";
// Styles Module...........
import styles from "./styles/FFnumber.module.css";

const FFnumber = () => {
  // using the store actions dispatch..........
  const dispatch = useDispatch();

  // initialise the state........
  let [numValue, setnumValue] = useState("Enter your number");

  const buttonValue = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "Clear",
    "0",
    "Done",
  ];
  // it is Number click function...............
  const onButtonClick = (button) => {
    // if condistion appy for state in store ffgame and ffamount...........
    if (button === "Done") {
      dispatch(ffnumberActions.doneItems(numValue));
      setnumValue("Enter your number");
    } else if (button === "Clear") {
      setnumValue("Enter your number");
    } else {
      setnumValue(button);
    }
  };

  return (
    <div className="col-md-6">
      <div className={styles.ffNum}>
        <input className={styles.ffInput} readOnly value={numValue} />
        <div className={styles.ffBtndiv}>
          {buttonValue.map((button) => (
            <button
              key={button}
              className={styles.ffBtn}
              onClick={() => onButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FFnumber;
