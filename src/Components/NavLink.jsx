import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import ServiceDropdown from "../Components/ServiceDropdown";

const NavLink = () => {
  return (
    <>
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
    </>
  );
};
export default NavLink;
