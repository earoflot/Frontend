// Style Module...OR CSS.......
import "../styles/NavigationDrawer.css";
import "bootstrap/dist/css/bootstrap.min.css";
// External Module......
// IMPORT External Module From React-Bootstrap

import Navbar from "react-bootstrap/Navbar";
// Local Module..........

// Import Local Default Module From NavLink.jsx
import NavLink from "./NavLink";
// Import Local Name Module From Icon.jsx
import { AccountIcon } from "./Icon";
import { ShoppingbagIcon } from "./Icon";
import { WalletIcon } from "./Icon";
import { SettingIcon } from "./Icon";
import "bootstrap/dist/css/bootstrap.min.css";
// Navigation Functions...............
function NavigationDrawer() {
  return (
    <div className="container-fluid bg-light mt-0">
      <div className="container ">
        <div className="row">
          <Navbar collapseOnSelect expand="lg" className="col">
            <Navbar.Brand className="me-lg-5">Manishquare</Navbar.Brand>
            {/*import local icon module from icon.jsx*/}

            <ShoppingbagIcon className="mt-lg-4" />
            <WalletIcon />
            <SettingIcon />
            <AccountIcon />

            {/**NavBar Toggle............... */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {/*import local Nav Link module from NavLink.jsx*/}
              <NavLink />
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavigationDrawer;
