// Import External.......
// Import External Module From React-Bootstrap
import Nav from "react-bootstrap/Nav";
// Import External Module From React-Router-Dom
import { Link } from "react-router-dom";
// Import External Module From React-Icon
import { IoPersonAddSharp } from "react-icons/io5";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoWalletSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

// It is name export function......its export ShoppingBag Icon
export function ShoppingbagIcon() {
  return (
    <Nav.Link eventKey={6} as={Link} to={"/shoppingbag"} className="sms-lg-5">
      <IoBagCheckSharp />
    </Nav.Link>
  );
}
// It is name export function......its export Wallet Icon
export function WalletIcon() {
  return (
    <Nav.Link eventKey={6} as={Link} to={"/wallet"} className="ms-lg-4">
      <IoWalletSharp />
    </Nav.Link>
  );
}
// It is name export functions....its export Setting Icon
export function SettingIcon() {
  return (
    <Nav.Link eventKey={6} as={Link} to={"/settings"} className="ms-lg-4">
      <IoSettingsSharp />
    </Nav.Link>
  );
}

// It is name export function......its export Profile Icon
export function AccountIcon() {
  return (
    <Nav.Link eventKey={6} as={Link} to={"/profile"} className="mx-lg-4">
      <IoPersonAddSharp />
    </Nav.Link>
  );
}
