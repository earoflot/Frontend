// External Module
import { useSelector } from "react-redux";
// Local Module
import Container from "../Container/Container";
import NotificationsComp from "../Components/NotificationsComp";
import Currentnotifs from "../Components/CurrentnotifsComp";
// Name Import...........;

export default function Notifications() {
  const notifs = useSelector((store) => store.notificationsSlice);
  const currentnotifs = useSelector((store) => store.currentnotifsSlice);

  return (
    <Container>
      {currentnotifs.map((crrnoti) => (
        <Currentnotifs key={crrnoti.id} crrnotifs={crrnoti} />
      ))}
      {notifs.map((noti) => (
        <NotificationsComp key={noti.id} notifs={noti} />
      ))}
    </Container>
  );
}
