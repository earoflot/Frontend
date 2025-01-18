import Accordion from "react-bootstrap/Accordion";

function NotificationsComp({ items }) {
  console.log(items);
  return (
    <Accordion defaultActiveKey="1" className="py-0">
      <Accordion.Item eventKey="2">
        <Accordion.Header>{items.title}</Accordion.Header>
        <Accordion.Body>{items.description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default NotificationsComp;
