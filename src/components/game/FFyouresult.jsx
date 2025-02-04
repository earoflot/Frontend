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
  const value = [1, 2, 3];

  return (
    <div className={styles.resultDiv}>
      <div className={styles.resultTable}>
        <table className="table">
          <thead>
            <tr>
              <th className="text-primary-emphasis bg-warning" scope="col">
                #
              </th>
              <th className=" text-primary-emphasis bg-warning" scope="col">
                Number
              </th>
              <th className="text-primary-emphasis bg-warning" scope="col">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {value.map((val) => (
              <tr>
                <th scope="row" className="text-light bg-danger">
                  {val}
                </th>
                <td className="text-dark bg-info">0</td>
                <td className="text-dark bg-info">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.resultBtn}>
        {" "}
        {/* <button type="button" className={`btn btn-danger`}>
          Cencel
        </button>
        <button type="button" className="btn btn-success">
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default FFyouresult;
