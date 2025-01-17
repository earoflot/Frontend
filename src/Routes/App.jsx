import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import NavigationDrawer from "../Components/NavigationDrawer";
import Footer from "../Components/Footer";

import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Modal from "../Components/Modal";
import FetchItems from "../Components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <NavigationDrawer />
      <Container>
        <FetchItems />
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      </Container>

      <Footer />
    </>
  );
}

export default App;
