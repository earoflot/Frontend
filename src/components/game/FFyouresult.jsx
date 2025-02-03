// External Module....
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/FFyouresult.module.css";

const FFyouresult = () => {
  const youResult = useSelector((state) => state.ffyouresultSlice);
  const youNumber = useSelector((state) => state.ffnumberSlice);
  const youAmount = useSelector((state) => state.ffamountSlice);

  const timeValue = [
    "10:30",
    "12:00",
    "01:30",
    "03:00",
    "04:30",
    "06:00",
    "07:30",
    "09:00",
  ];
  const dateValue = ["01.01.2000"];
  const numValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className={styles.resultDiv}>
      <div className={styles.resultTable}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Number</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.resultBtn}>
        {" "}
        <button type="button" className={`btn btn-danger`}>
          Cencel to
        </button>
        <button type="button" className="btn btn-success">
          Submit to
        </button>
      </div>
    </div>
  );
};

export default FFyouresult;
