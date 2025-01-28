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
import styles from "./styles/Icon.module.css";

import { useSelector } from "react-redux";
// It is name export function......its export ShoppingBag Icon

export function ShoppingbagIcon() {
  const bags = useSelector((store) => store.shoppingbagSlice);

  return (
    <Nav.Link
      eventKey={1}
      as={Link}
      to={"/shoppingbag"}
      className={styles.shoppingBag}
    >
      <IoBagCheckSharp />
      {bags.length}
    </Nav.Link>
  );
}
// It is name export function......its export Wallet Icon
export function WalletIcon() {
  const wallet = useSelector((store) => store.walletSlice);
  return (
    <Nav.Link
      eventKey={6}
      as={Link}
      to={"/wallet"}
      className={styles.wallteBag}
    >
      <IoWalletSharp />
      {wallet}
    </Nav.Link>
  );
}
// It is name export functions....its export Setting Icon
export function SettingIcon() {
  return (
    <Nav.Link
      eventKey={6}
      as={Link}
      to={"/settings"}
      className={styles.settIngs}
    >
      <IoSettingsSharp />
    </Nav.Link>
  );
}

// It is name export function......its export Profile Icon
export function AccountIcon() {
  return (
    <Nav.Link eventKey={6} as={Link} to={"/profile"} className={styles.proFile}>
      <IoPersonAddSharp />
    </Nav.Link>
  );
}
