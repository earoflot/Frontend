import styles from "../styles/FFsammary.module.css";

const FFsammary = ({ summaryValue }) => {
  const amountValue = ["5", "10", "50", "100", "150", "200", "500", "1000"];
  return (
    <div className="col-md-6">
      <div className={styles.ffStatus}>
        {summaryValue}
        {summaryValue.length === 0 && <h1> please enter your numbar</h1>}
        {amountValue.map((amout) => (
          <button key={amout} className={styles.ffsummaryBtn}>
            {amout}
          </button>
        ))}
        <button>Submit</button>
      </div>
    </div>
  );
};

export default FFsammary;
