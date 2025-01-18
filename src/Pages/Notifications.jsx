// External Module
import { useSelector } from "react-redux";
// Local Module
import Container from "../Container/Container";
import NotificationsComp from "../Components/NotificationsComp";
// Name Import...........;

export default function Notifications() {
  const items = useSelector((store) => store.notificationsSlice);

  return (
    <Container>
      {items.map((item) => (
        <NotificationsComp key={item.id} items={items} />
      ))}
    </Container>
  );
}
