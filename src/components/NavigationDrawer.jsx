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

import {
  WalletIcon,
  AccountIcon,
  ShoppingbagIcon,
  SettingIcon,
} from "../components/icon/Icon";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavigationDrawer.css";
import { Link } from "react-router-dom";
import styles from "../styles/NavigationDrawer.module.css";
// Navigation Functions...............
function NavigationDrawer() {
  return (
    <div className="container-fluid ">
      <div className="container">
        <div className="row">
          <Navbar collapseOnSelect expand="lg" className="col">
            <Navbar.Brand>
              <Link to="/home" className={styles.brandName}>
                manisQaure
              </Link>
            </Navbar.Brand>
            {/*import local icon module from icon.jsx*/}

            <ShoppingbagIcon className="mt-lg-4 " />
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
