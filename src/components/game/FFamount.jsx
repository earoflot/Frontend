// External Module............
// Get the data in store
import { useSelector } from "react-redux";
// Import styles module................
import styles from "./styles/FFamount.module.css";

const FFamount = ({ onAmountButton }) => {
  // find the ff number store and use the data.......
  const number = useSelector((state) => state.ffnumberSlice);
  const amountValue = [
    "5",
    "10",
    "50",
    "100",
    "150",
    "200",
    "500",
    "1000",
    "Submit",
  ];

  return (
    <div className="col-md-6">
      <div className={styles.FFamountDiv}>
        <input readOnly value={number} />

        {amountValue.map((amout) => (
          <button
            key={amout}
            className={styles.ffamountBtn}
            onClick={() => onAmountButton(amout)}
          >
            {amout}
          </button>
        ))}
      </div>
    </div>
  );
};
export default FFamount;
