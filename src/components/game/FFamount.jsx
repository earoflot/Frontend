// Core Module..........
import { useState } from "react";
// External Module............
// Get the data in store
import { useSelector, useDispatch } from "react-redux";
// Import styles module................
import styles from "./styles/FFamount.module.css";
import { ffamountActions } from "../../store/game/ffamountSlice";
import { ffnumberActions } from "../../store/game/ffnumberSlice";
// Icon import from React-Icon............
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const FFamount = ({ aButtonClick, amountValue, submitButton }) => {
  // Amount value button initialise.......
  const amountBtn = [10, 50, 100, 200, 500];
  const elementFound = true;
  return (
    <div className={styles.mainAmoutdiv}>
      <div className={styles.amountInput}>
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
            readOnly
            placeholder="₹"
            value={amountValue}
          />
        </div>
      </div>
      <div className={styles.amountBtn}>
        {amountBtn.map((amount) => (
          <button
            key={amount}
            className="btn btn-outline-info"
            onClick={() => aButtonClick(amount)}
          >
            {amount}
          </button>
        ))}
      </div>
      <div className={styles.amountSubmit}>
        {/* <button type="button" className={`btn btn-outline-danger`}>
          Clear
        </button> */}
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={submitButton}
        >
          Sumit
        </button>
      </div>
    </div>
  );
};
export default FFamount;

{
  /* <div className="col-md-6">
      <div className={styles.FFamountDiv}>
        <div>
          <input readOnly value={number} />
          <input readOnly value={getAmount} />
        </div>

        {amountValue.map((amount) => (
          <button
            key={amount}
            className={styles.ffamountBtn}
            onClick={() => onAmountButton(amount)}
          >
            {amount}
          </button>
        ))}
      </div>
    </div> */
}
