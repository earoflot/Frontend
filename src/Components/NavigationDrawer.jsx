// Style Module...OR CSS.......
import "../styles/NavigationDrawer.css";
// External Module......
// IMPORT External Module From React-Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Import External Module From React-Router-Dome
import { Link } from "react-router-dom";
// Local Module..........
// Import Defualt Module From ServiceDropdown.jsx
import ServiceDropdown from "../Components/ServiceDropdown";
// Import Default Module From NavLink.jsx
import NavLink from "./NavLink";
// Import Name Module From Icon.jsx
import { AccountIcon } from "./Icon";
import { ShoppingbagIcon } from "./Icon";
import { WalletIcon } from "./Icon";

// Navigation Functions...............
function NavigationDrawer() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container className="m">
        <Navbar.Brand>NEW INDIA INTERPRICES</Navbar.Brand>

        {/*import local icon module from icon.jsx*/}
        <AccountIcon />
        <ShoppingbagIcon />
        <WalletIcon />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationDrawer;
