import styles from "../styles/FFamount.module.css";

const FFamount = ({ summaryValue }) => {
  const amountValue = ["5", "10", "50", "100", "150", "200", "500", "1000"];
  return (
    <div className="col-md-6">
      <div className={styles.FFamountDiv}>
        {summaryValue}
        {summaryValue.length === 0 && <h1> please enter your numbar</h1>}
        {amountValue.map((amout) => (
          <button key={amout} className={styles.ffamountBtn}>
            {amout}
          </button>
        ))}
        <button>Submit</button>
      </div>
    </div>
  );
};

export default FFamount;
