import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>QUICK LINKS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-body-secondary">
                  HOME
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/notifications"
                  className="nav-link p-0 text-body-secondary"
                >
                  NOTIFICATIONS
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/shop" className="nav-link p-0 text-body-secondary">
                  SHOP
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/game" className="nav-link p-0 text-body-secondary">
                  GAME
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/job" className="nav-link p-0 text-body-secondary">
                  JOB
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/education"
                  className="nav-link p-0 text-body-secondary"
                >
                  EDUCATION
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/exam" className="nav-link p-0 text-body-secondary">
                  EXAMS
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>OUR ADDRESS</h5>
            <ul className="nav flex-column"></ul>
          </div>

          <div className="col mb-3">
            <h5>CONTACT US</h5>
            <ul className="nav flex-column"></ul>
          </div>
          <div className="col mb-3">
            <h5>FOLLOW US</h5>
            <ul className="nav flex-column"></ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
