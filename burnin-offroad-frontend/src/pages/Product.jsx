const Product = () => {
  return (
    <div>
      <div className="container ">
        <div id="hero-product">
          <div className="row">
            <div
              className="col-12 col-lg-8 pe-0 pe-lg-5"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/assets/images/car-example.jpg"
                      className="d-block w-100 product-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/car-example2.jpg"
                      className="d-block w-100 product-image"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/download.jpeg"
                      className="d-block w-100 product-image"
                      alt="..."
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div>
                <h4 className="fw-bold mt-5 mb-3">Description</h4>
                <p> 2010 Freightliner Reefer 26ft</p>
                <p> Cummins 8.3 motor</p>
                <p> Allison auto 6 Spd</p>
                <p> Tandem axles</p>
                <p> 170k miles</p>
                <p> 26ft box 102 high 97 width</p>
                <p> Tires 22.5 80%</p>
                <p> Spring Suspension</p>
                <p> Very clean truck, will sell it as cab and chassis also</p>
                <p> $22,500 obo.</p>
                <p> Contact Blake (909) 772-7203.</p>
                <p> Located Redlands, Ca.</p>
              </div>
            </div>
            <div
              className="col-12 col-lg-4 my-5"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <h3>2010 Freightliner Reefer 26 </h3>
              <div className="d-flex align-items-center my-3">
                <span>2010</span>
                <i className="fa-solid fa-circle"></i>
                <span>170.000 miles</span>
                <i className="fa-solid fa-circle"></i>
                <span>Heavy Equipment</span>
              </div>
              <hr />
              <div className="mt-5">
                <h2 className="text-red fw-600">$22,500</h2>
                <div className="product-info mt-5">
                  <div className="row">
                    <div className="col-6 mb-2 fw-600 text-dark">Mileage: </div>
                    <div className="col-6 mb-2">170,000 miles</div>
                    <div className="col-6 mb-2 fw-600 text-dark">Model: </div>
                    <div className="col-6 mb-2"> Reefer</div>
                    <div className="col-6 mb-2 fw-600 text-dark">State: </div>
                    <div className="col-6 mb-2">Ca</div>
                    <div className="col-6 mb-2 fw-600 text-dark">City:</div>
                    <div className="col-6 mb-2">Redlands</div>
                    <div className="col-6 mb-2 fw-600 text-dark">Type:</div>
                    <div className="col-6 mb-2">Heavy Equipment</div>
                    <div className="col-6 mb-2 fw-600 text-dark">Year:</div>
                    <div className="col-6 mb-2">2010</div>
                  </div>
                </div>
                <a href="#" className="btn custom-btn d-block my-3">
                  Send Message
                </a>
                <p className="text-center">Offer ID #230962</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
