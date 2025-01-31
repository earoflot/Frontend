const FFyouresult = () => {
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
  return (
    <>
      <div>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">{dateValue}</li>
        </ul>
      </div>
      <div>
        <ul class="list-group list-group-horizontal">
          {timeValue.map((item) => (
            <li class="list-group-item">{item}</li>
          ))}
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
