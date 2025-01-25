// External Module......
// IMPORT External Module From React-Bootstrap
import Nav from "react-bootstrap/Nav";
// Import External Module From React-Router-Dome
import { Link } from "react-router-dom";
// Local Module..........
// Import Local Defualt Module From ServiceDropdown.jsx
import ServiceDropdown from "../components/ServiceDropdown";

const NavLink = () => {
  return (
    <Nav>
      {" "}
      <Nav.Link eventKey={0} as={Link} to={"/home"}>
        HOME
      </Nav.Link>
      <Nav.Link eventKey={1} as={Link} to={"/notifications"}>
        NOTIFICATIONS
      </Nav.Link>
      {/*import local ServiceDropdown components module from ServiceDropdown.jsx*/}
      <ServiceDropdown />
      <Nav.Link eventKey={7} as={Link} to={"/about"}>
        ABOUT
      </Nav.Link>
      <Nav.Link eventKey={7} as={Link} to={"/contact"}>
        CONTACT
      </Nav.Link>
    </Nav>
  );
};
export default NavLink;
