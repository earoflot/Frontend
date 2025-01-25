// External Module
import { useSelector } from "react-redux";
// Local Module
import Container from "../../Container/Container";
// Notification Components Initialise Module......set to the value or put in the condition appropriate to the start of an operation......
import Old_notifications from "./OldnotifsComp";
import Current_notifications from "./CurrentnotifsComp";
// Name Import...........;

export default function Notifications() {
  // Assign the store value in current notifiactions.................
  const current_notifs = useSelector((store) => store.currentnotifsSlice);
  // Assign the store value in old notifiactions.................
  const old_notifs = useSelector((store) => store.notificationsSlice);

  return (
    <Container>
      <div className="row">
        <div className="col-md-6">
          {current_notifs.map((crrnoti) => (
            <Current_notifications key={crrnoti.id} crrnotifs={crrnoti} />
          ))}
        </div>
        <div className="col-md-6">
          {" "}
          {old_notifs.map((noti) => (
            <Old_notifications key={noti.id} notifs={noti} />
          ))}
        </div>
      </div>
    </Container>
  );
}
