// External Module.......................
import Accordion from "react-bootstrap/Accordion";
// Current notifications function..............
const Currentnotifs = ({ crrnotifs }) => {
  return (
    <>
      <Accordion defaultActiveKey="" className="py-0">
        <Accordion.Item eventKey="">
          <Accordion.Header>{crrnotifs.title}</Accordion.Header>
          <Accordion.Body>{crrnotifs.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Currentnotifs;
