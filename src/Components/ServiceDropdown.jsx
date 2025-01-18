import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import styles from "../styles/ServiceDropdown.module.css";

const ServiceDropdown = () => {
  return (
    <NavDropdown
      className={styles.navDropdown}
      title="SERVICES"
      id="collapsible-nav-dropdown "
    >
      <NavDropdown.Item className={styles.navItems}>
        <Nav.Link
          className={styles.navLinks}
          eventKey={11}
          as={Link}
          to={"/shop"}
        >
          SHOP
        </Nav.Link>
        <Nav.Link eventKey={11} as={Link} to={"/game"}>
          GAME
        </Nav.Link>
        <Nav.Link eventKey={11} as={Link} to={"/job"}>
          JOB
        </Nav.Link>
        <Nav.Link eventKey={11} as={Link} to={"/education"}>
          EDUCATION
        </Nav.Link>
        <Nav.Link eventKey={5} as={Link} to={"/exam"}>
          EXAMS
        </Nav.Link>
      </NavDropdown.Item>

      <NavDropdown.Divider className={styles.navDivider} />
      <NavDropdown.Item className={styles.socalLink} href="#action/3.4">
        https://youtube.com
      </NavDropdown.Item>
      <NavDropdown.Item className={styles.socalLink} href="#action/3.4">
        https://facebook.com
      </NavDropdown.Item>
    </NavDropdown>
  );
};
export default ServiceDropdown;
