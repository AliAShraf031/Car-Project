import NavCss from "./Nav.module.css";
import logo from "../../assets/assignment-images/images/nav/logo.png";
import { Link } from "react-router";
export default function Nav() {
  return (
    <header>
      <nav className={NavCss.nav}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={NavCss.links}>
          <li>
            <a href="#">Become A Renter</a>
          </li>
          <li>
            <a href="#details">Rental Details</a>
          </li>
          <li>
            <a href="#work">How It Work</a>
          </li>
          <li>
            <a href="#why">Why Choose Us</a>
          </li>
        </ul>
        <div className={NavCss.buttons}>
          <a href="#"> Sign Up</a>
          <a className="btn btn-primary" href="#">
            Sign In
          </a>
        </div>
      </nav>
      <div className={`${NavCss.menu} container`}>
        <nav className="navbar bg-body-white fixed-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
              <img src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className={NavCss.links}>
                  <li>
                    <a href="#">Become A Renter</a>
                  </li>
                  <li>
                    <a href="#details">Rental Details</a>
                  </li>
                  <li>
                    <a href="#work">How It Work</a>
                  </li>
                  <li>
                    <a href="#why">Why Choose Us</a>
                  </li>
                </ul>
                <div className={NavCss.buttons}>
                  <a href="#"> Sign Up</a>
                  <a className="btn btn-primary" href="#">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
