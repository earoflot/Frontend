// External Module
import { useSelector } from "react-redux";
// Local Module
import Container from "../Container/Container";
import NotificationsComp from "../Components/NotificationsComp";
// Name Import...........;

export default function Notifications() {
  const notifs = useSelector((store) => store.notificationsSlice);

  return (
    <Container>
      {notifs.map((noti) => (
        <NotificationsComp key={noti.id} notifs={noti} />
      ))}
    </Container>
  );
}
