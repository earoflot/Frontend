import Accordion from "react-bootstrap/Accordion";

function NotificationsComp({ Title, Description }) {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="2">
        <Accordion.Header>{Title}</Accordion.Header>
        <Accordion.Body>{Description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default NotificationsComp;
