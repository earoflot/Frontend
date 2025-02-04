import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/FFresult.module.css";

function Result() {
  const time = [
    "10:30",
    "12:00",
    "01:30",
    "03:00",
    "04:30",
    "06:00",
    "07:30",
    "09:00",
  ];
  const numValue = ["0", "1", "2", "3", "4", "5", "6", "7"];

  return (
    <div className={styles.resultMain}>
      <div className={styles.dateDiv}>04 February 2025</div>
      <Table responsive="sm">
        <thead>
          <tr>
            {time.map((time) => (
              <th className="bg-warning text-dark" key={time}>
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {numValue.map((num) => (
              <td className="bg-light text-danger" key={num}>
                {num}
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Result;
