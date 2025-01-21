import styles from "../styles/FFgame.module.css";

const FFgame = ({ inputValue, buttonValue, onButtonClick }) => {
  return (
    <div className="col-md-6">
      <div className={styles.ffGame}>
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
export default FFgame;
