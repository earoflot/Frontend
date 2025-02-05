// Core Module...........

// External Module............
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// Local Module..............
import NavigationDrawer from "../components/layout/NavigationDrawer";
import Footer from "../components/layout/Footer";
import Container from "../Container/Container";
import FetchItems from "../api/it/Fetchitems";
import LoadingSpinner from "../api/err/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <header>
        {" "}
        <NavigationDrawer />
      </header>
      <main>
        <Container>
          <FetchItems />
          {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
        </Container>
      </main>

      <footer>
        <Container> </Container>{" "}
      </footer>
    </>
  );
}

export default App;
