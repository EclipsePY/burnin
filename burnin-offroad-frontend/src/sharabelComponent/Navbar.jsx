import { Link } from "react-router-dom";
const Navbar = () => {
  const onNavBtnClick = () => {
    let nav = document.getElementById("mobile-nav");
    if (nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      nav.classList.add("nav-close");
    } else {
      nav.classList.remove("nav-close");
      nav.classList.add("nav-open");
    }
  };
  return (
    <header className="" data-aos="fade" data-aos-duration="600">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="">
          <a href="#" className="d-flex align-items-center logo">
            <img
              src="/assets/images/logo-red.png"
              className="me-3"
              width="100"
            />
            <h4 className="mb-0">Burnin Offroad</h4>
          </a>
        </div>
        <div className="nav-hide">
          <nav>
            <ul className="nav">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/purchase"} className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/listings"} className="nav-link">
                  Listings
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-hide">
          <Link to={"/contact"} className="btn custom-btn">
            Contact Us
          </Link>
        </div>
        <div>
          <button onClick={onNavBtnClick} className="btn nav-btn" id="nav-btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="nav-mobile-hide nav-hide pb-3" id="mobile-nav">
        <div className="nav-mobile">
          <nav>
            <ul className="nav">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/purchase"} className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/listings"} className="nav-link">
                  Listings
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-mobile text-center mt-3">
          <a
            href="#"
            className="btn custom-btn"
            id="nav-btn"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
