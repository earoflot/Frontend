// External Module....

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/FFyouresult.module.css";

const FFyouresult = ({ resultNumber, resultAmount }) => {
  const dateValue = ["01.01.2000"];

  let value = { num: resultNumber, value: resultAmount };

  console.log(value);

  const valu = [1, 2, 3];

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
            {valu.map((val) => (
              <tr key={val}>
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
