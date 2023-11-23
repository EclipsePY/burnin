import BrowseByTypes from "../Sections/BrowseTypes/BrowseByTypes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id="hero">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h1 className="mb-0">
                $100 RUNS <span style={{ color: "#E51C1A" }}>TILL </span>
                IT SELLS!
              </h1>
              <p className="my-3 py-1 fw-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                veniam hic obcaecati ab esse asperiores!
              </p>
              <Link to={"/purchase"}  className="btn custom-btn">
                Sell your toy
              </Link>
              <div className="socials">
                <a href="https://facebook.com" rel="noreferrer" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com" rel="noreferrer" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
            <div
              className="col-12 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <img
                src="/assets/images/vector.png"
                className="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <BrowseByTypes />

      <div id="section-3">
        <div className="container">
          <h1
            className="text-center section-3-heading "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Why choose us?
          </h1>
          <div className="row my-5 py-5">
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="row why-us-info-box-container">
                <div className="col-12 col-sm-6">
                  <div className="why-us-info-box why-us-info-box-1 shadow">
                    <i className="fa-regular fa-globe-pointer"></i>
                    <h5>Worldwide selling</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odit fuga consectetur possimus dolorum inventore
                      repellendus.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-us-info-box why-us-info-box-2 shadow">
                    <i className="fa-regular fa-signal-bars"></i>
                    <h5>Stats</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odit fuga consectetur possimus dolorum inventore
                      repellendus.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-us-info-box why-us-info-box-3 shadow">
                    <i className="fa-regular fa-tag"></i>
                    <h5>Cheap Pricing</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odit fuga consectetur possimus dolorum inventore
                      repellendus.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-us-info-box why-us-info-box-4 shadow">
                    <i className="fa-regular fa-circle-check"></i>
                    <h5>Success Rate</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odit fuga consectetur possimus dolorum inventore
                      repellendus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 d-flex align-items-center justify-content-center vector-2-container"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <img
                src="/assets/images/vector-2.png"
                className="vector-2 img-fluid d-block mx-auto mx-lg-0 ms-lg-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
