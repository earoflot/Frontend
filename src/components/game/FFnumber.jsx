import styles from "./styles/FFnumber.module.css";

const FFnumber = ({ inputValue, onButtonClick }) => {
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
  return (
    <div className="col-md-6">
      <div className={styles.ffNum}>
        <input className={styles.ffInput} readOnly value={inputValue} />
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
