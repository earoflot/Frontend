import styles from "./styles/FFamount.module.css";

const FFamount = ({ numValue, onAmountButton }) => {
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
        <div>
          {" "}
          {numValue}
          {numValue <= 0 && <h1> please enter your numbar</h1>}
        </div>

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
