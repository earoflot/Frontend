const FFyouresult = ({ youResult }) => {
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

  console.log(youResult);
  return (
    <>
      <div>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">{dateValue}</li>
        </ul>
      </div>
      <div>
        <ul className="list-group list-group-horizontal">
          {timeValue.map((item) => (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="list-group list-group-vertical">
          <li className="list-group-item">{youResult}</li>
        </ul>
      </div>
    </>
  );
};

export default FFyouresult;

{
  /* <ul class="list-group list-group-horizontal-sm">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul> */
}
