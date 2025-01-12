import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavigationDrawer from "../Components/NavigationDrawer/NavigationDrawer";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import CarouselComp from "../Components/CarouselComp/CarouselComp";
function App() {
  return (
    <>
      <Container>
        <NavigationDrawer />
      </Container>
      <div className="modalOverLay"></div>

      <Container>
        <Outlet />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
