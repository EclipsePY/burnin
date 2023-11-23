import { ToastContainer } from "react-toastify";
import ModalForm from "../sharabelComponent/ModalForm";
import { useState } from "react";

const Purchase = () => {
  const [p, setP] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? <ModalForm p={p} /> : <ModalForm />}
      <ToastContainer />
      <div id="purchase-hero">
        <div className="purchase-heading" data-aos="fade">
          <h1
            className="mb-0 text-light text-center fw-bold"
            style={{ fontSize: "4em", textShadow: "4px 4px 3px #000" }}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Purchase{" "}
          </h1>
        </div>
        <div className="background" data-aos="fade ">
          <div className="container-fluid">
            <div className="panel pricing-table">
              <div
                className="pricing-plan"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <img
                  src="/assets/images/paper-plane.png"
                  alt=""
                  className="pricing-img"
                />
                <h2 className="pricing-header">Personal</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                </ul>
                <span className="pricing-price">$30</span>
                <button
                  type="button"
                  className="pricing-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setOpen(true);
                    setP(30);
                    localStorage.setItem("price", 30);
                  }}
                  // dataWhatever="@getbootstrap"
                >
                  Buy
                </button>
              </div>

              <div
                className="pricing-plan"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  src="/assets/images/plane.png"
                  alt=""
                  className="pricing-img"
                />
                <h2 className="pricing-header">Small team</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                </ul>
                <span className="pricing-price">$60</span>
                <button
                  type="button"
                  className="pricing-button "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setOpen(true);
                    setP(60);
                    localStorage.setItem("price", 60);
                  }}
                  // dataWhatever="@getbootstrap"
                >
                  Buy
                </button>
              </div>

              <div
                className="pricing-plan"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
              >
                <img
                  src="/assets/images/space-ship.png"
                  alt=""
                  className="pricing-img"
                />
                <h2 className="pricing-header">Enterprise</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                </ul>
                <span className="pricing-price">$100</span>
                <button
                  type="button"
                  className="pricing-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  // dataWhatever="@getbootstrap"
                  onClick={() => {
                    setOpen(true);
                    setP(100);
                    localStorage.setItem("price", 100);
                  }}
                >
                  Buy
                </button>
              </div>

              <div
                className="pricing-plan satelite-img-container"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
              >
                <img
                  src="/assets/images/satelite.png"
                  alt=""
                  className="pricing-img satelite-img pt-4"
                />
                <h2 className="pricing-header" style={{ marginTop: "35px" }}>
                  Lorem
                </h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                  <li className="pricing-features-item">Custom domains</li>
                  <li className="pricing-features-item">
                    Sleeps after 30 mins of inactivity
                  </li>
                </ul>
                <span className="pricing-price">$150</span>
                <button
                  type="button"
                  className="pricing-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setOpen(true);
                    setP(150);
                    localStorage.setItem("price", 150);
                  }}
                  // dataWhatever="@getbootstrap"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
