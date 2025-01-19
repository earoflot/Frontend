// External Module...................
import Accordion from "react-bootstrap/Accordion";
// Old notification function.............
function NotificationsComp({ notifs }) {
  return (
    <>
      <Accordion defaultActiveKey="0" className="py-0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>{notifs.title}</Accordion.Header>
          <Accordion.Body>{notifs.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default NotificationsComp;
