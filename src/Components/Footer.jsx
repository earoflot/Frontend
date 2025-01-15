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
                <Link to="/apply" className="nav-link p-0 text-body-secondary">
                  APPLY
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/post" className="nav-link p-0 text-body-secondary">
                  JOB POST
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  PLACEMENT
                </a>
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
