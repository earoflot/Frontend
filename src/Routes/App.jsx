// Core Module...........

// External Module............
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// Local Module..............
import NavigationDrawer from "../Components/NavigationDrawer";
import Footer from "../Components/Footer";
import Container from "../Container/Container";
import FetchItems from "../Components/Fetchitems";
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
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
