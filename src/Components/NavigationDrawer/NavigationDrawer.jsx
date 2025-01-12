import "./NavigationDrawer.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
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
            <Nav.Link eventKey={2} as={Link} to={"/game"}>
              GAME
            </Nav.Link>
            <NavDropdown title="SERVICES" id="collapsible-nav-dropdown">
              <NavDropdown.Item>
                {" "}
                <Nav.Link eventKey={2} as={Link} to={"/apply"}>
                  APPLY
                </Nav.Link>
                <Nav.Link eventKey={3} as={Link} to={"/post"}>
                  POST
                </Nav.Link>
                <Nav.Link eventKey={4} as={Link} to={"/placement"}>
                  PLACEMENT
                </Nav.Link>
                <Nav.Link eventKey={5} as={Link} to={"/exam"}>
                  EXAMS
                </Nav.Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                https://youtube.com
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                https://facebook.com
              </NavDropdown.Item>
            </NavDropdown>
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
