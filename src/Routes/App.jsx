import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import NavigationDrawer from "../Components/NavigationDrawer";
import Footer from "../Components/Footer";

import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Modal from "../Components/Modal";

function App() {
  return (
    <>
      <NavigationDrawer />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}

export default App;
