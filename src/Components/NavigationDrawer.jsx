import "../styles/NavigationDrawer.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ServiceDropdown from "../Components/ServiceDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container className="m">
        <Navbar.Brand>NEW INDIA INTERPRICES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey={0} as={Link} to={"/home"}>
              HOME
            </Nav.Link>
            <Nav.Link eventKey={1} as={Link} to={"/notifications"}>
              NOTIFICATIONS
            </Nav.Link>
            <ServiceDropdown />

            <Nav.Link eventKey={6} as={Link} to={"/about"}>
              ABOUT
            </Nav.Link>

            <Nav.Link eventKey={7} as={Link} to={"/contact"}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
