// Core Module...........

// External Module............
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// Local Module..............
import NavigationDrawer from "../components/NavigationDrawer";
import Footer from "../components/Footer";
import Container from "../Container/Container";
import FetchItems from "../components/it/Fetchitems";
import LoadingSpinner from "../components/err/LoadingSpinner";

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
        <Container>
          {" "}
          <Footer />
        </Container>{" "}
      </footer>
    </>
  );
}

export default App;
