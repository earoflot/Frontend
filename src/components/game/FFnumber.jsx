// Styles Module...........
import styles from "./styles/FFnumber.module.css";
// Icon import from React-Icon............
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
const FFnumber = ({ nButtonClick, numValue, clearButton }) => {
  const buttonValue = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const elementFound = true;
  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputDiv}>
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control"
            readOnly
            value={numValue}
            placeholder="Number"
          />
        </div>
      </div>
      <div className={styles.numDiv}>
        {buttonValue.map((number) => (
          <button
            key={number}
            className="btn btn-outline-info"
            onClick={() => nButtonClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className={styles.submDiv}>
        <button
          type="button"
          className={`btn btn-outline-danger`}
          onClick={clearButton}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FFnumber;
