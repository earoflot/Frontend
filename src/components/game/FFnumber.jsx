// Styles Module...........
import styles from "./styles/FFnumber.module.css";
// Icon import from React-Icon............
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
const FFnumber = ({ onButtonClick, numValue, clearButton, doneButton }) => {
  const buttonValue = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const elementFound = true;
  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputDiv}>
        <div className="input-group">
          <span className="input-group-text">Your Number</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            type="text"
            readOnly
            value={numValue}
          ></textarea>
        </div>
      </div>
      <div className={styles.numDiv}>
        {" "}
        {buttonValue.map((button) => (
          <button
            key={button}
            className="btn btn-secondary"
            onClick={() => onButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className={styles.submDiv}>
        {" "}
        {elementFound ? (
          <button type="button" className="btn btn-add-bag btn-success">
            <GrAddCircle />
            Done
          </button>
        ) : (
          <button type="button" className={`btn btn-add-bag btn-danger`}>
            <AiFillDelete /> Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default FFnumber;
