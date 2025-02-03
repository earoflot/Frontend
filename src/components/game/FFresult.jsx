import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const dilNum = ["1", "2", "3"];
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Time</th>
            {time.map((time) => (
              <th key={time}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dilNum.map((dil) => (
            <tr key={dil}>
              <td>{dil}</td>
              {numValue.map((num) => (
                <td key={num}>{num}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Result;
