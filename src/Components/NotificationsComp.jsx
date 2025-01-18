import Accordion from "react-bootstrap/Accordion";

function NotificationsComp({ notifs }) {
  console.log(notifs);
  return (
    <>
      <Accordion defaultActiveKey="" className="py-0">
        <Accordion.Item eventKey="">
          <Accordion.Header>{notifs.title}</Accordion.Header>
          <Accordion.Body>{notifs.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default NotificationsComp;
