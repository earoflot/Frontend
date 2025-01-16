// Style Module...OR CSS.......
import "../styles/NavigationDrawer.css";
// External Module......
// IMPORT External Module From React-Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Local Module..........
import ServiceDropdown from "../Components/ServiceDropdown";
// Import Local Default Module From NavLink.jsx
import NavLink from "./NavLink";
// Import Local Name Module From Icon.jsx
import { AccountIcon } from "./Icon";
import { ShoppingbagIcon } from "./Icon";
import { WalletIcon } from "./Icon";
import { SettingIcon } from "./Icon";

// Navigation Functions...............
function NavigationDrawer() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container className="m">
        <Navbar.Brand></Navbar.Brand>
        {/*import local icon module from icon.jsx*/}

        <ShoppingbagIcon />
        <WalletIcon />
        <SettingIcon />
        <AccountIcon />
        {/**NavBar Toggle............... */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/*import local Nav Link module from NavLink.jsx*/}
            <NavLink />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationDrawer;
