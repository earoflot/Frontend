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

const FFamount = () => {
  // using the store actions dispatch..........
  const dispatch = useDispatch();
  // find the ff number store and use the data.......
  const number = useSelector((state) => state.ffnumberSlice);
  // create a state of amount value........

  const [getAmount, setAmount] = useState(" ");
  const amountValue = ["10", "50", "100", "200", "500", "1000", "2000"];
  // Amount value button initialise.......
  const onAmountButton = (amount) => {
    if (amount === "Submit") {
      dispatch(ffamountActions.submitItems(getAmount));

      setAmount("");
    } else {
      setAmount(amount);
    }
  };
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
          />
        </div>
      </div>
      <div className={styles.amountBtn}>
        {amountValue.map((amount) => (
          <button
            key={amount}
            className="btn btn-outline-info"
            onClick={() => onAmountButton(amount)}
          >
            {amount}
          </button>
        ))}
      </div>
      <div className={styles.amountSubmit}>
        {" "}
        <button type="button" className="btn btn-outline-success">
          Add to
        </button>
        <button type="button" className={`btn btn-outline-danger`}>
          Clear
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
