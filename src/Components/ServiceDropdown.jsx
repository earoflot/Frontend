import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import styles from "../styles/ServiceDropdown.module.css";

const ServiceDropdown = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        id="collapsible-nav-dropdown "
      >
        SERVICES
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/shop" className="dropdown-item">
            SHOP
          </Link>
        </li>

        <li>
          <Link to="/game" className="dropdown-item">
            GAME
          </Link>
        </li>
        <li>
          <Link to="/job" className="dropdown-item">
            JOB
          </Link>
        </li>
        <li>
          <Link to="/education" className="dropdown-item">
            EDUCATION
          </Link>
        </li>
        <li>
          <Link to="/exam" className="dropdown-item">
            EXAMS
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            https://youtube.com
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            https://facebook.com
          </Link>
        </li>
      </ul>
    </li>
  );
};
export default ServiceDropdown;
