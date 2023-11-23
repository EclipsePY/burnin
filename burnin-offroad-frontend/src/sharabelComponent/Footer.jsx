import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted mt-5">
        <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src="/assets/images/logo-red.png"
                    width="100"
                    className="me-2"
                    alt=""
                  />
                  <span
                    style={{
                      fontFamily: "Permanent Marker, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Burnin Offroad
                  </span>
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Navigation Links</h6>
                <p>
                <Link to={"/"} className="text-reset">
                  Home
                </Link>
                </p>
                <p>
                <Link to={"/purchase"} className="text-reset">
                  Shop
                </Link>
                </p>
                <p>
                <Link to={"/about"} className="text-reset">
                  About
                </Link>
                </p>
                <p>
                <Link to={"/listings"} className="text-reset">
                  Listings
                </Link>
                </p>
                <p>
                <Link to={"/contact"} className="text-reset">
                  Contact Us
                </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 text-light"
          style={{ backgroundColor: "#000" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold ps-1" href="https://mdbootstrap.com/">
            BurningOffroad.co
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
