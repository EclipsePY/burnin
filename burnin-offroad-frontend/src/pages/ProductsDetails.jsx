import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const [Toy, setToy] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/v1/toys/single-toys/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setToy(data?.data);
        });
    }
  }, [id]);

  return (
    <div>
      <div className="container ">
        <div id="hero-product">
          {!Toy ? (
            <p> Loading...</p>
          ) : (
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
                    {Toy?.images ? (
                      Toy?.images.map((obj, idx) => (
                        <div
                          key={idx}
                          className={`carousel-item ${idx == 0 && "active"}`}
                        >
                          <img
                            src={obj}
                            className="d-block w-100 product-image"
                            alt="..."
                          />
                        </div>
                      ))
                    ) : (
                      <p> Loading ....</p>
                    )}
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
                  {Toy?.description}
                </div>
              </div>
              <div
                className="col-12 col-lg-4 my-5"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <h3> {Toy?.title} </h3>
                <div className="d-flex align-items-center my-3">
                  <span>{Toy?.date && new Date(Toy?.date).getFullYear()}</span>
                  <i className="fa-solid fa-circle"></i>
                  <span>{Toy?.Mileage} miles</span>
                  <i className="fa-solid fa-circle"></i>
                  <span> {Toy?.type} </span>
                </div>
                <hr />
                <div className="mt-5">
                  <h2 className="text-red fw-600">${Toy?.amount} </h2>
                  <div className="product-info mt-5">
                    <div className="row">
                      <div className="col-6 mb-2 fw-600 text-dark">
                        Mileage:{" "}
                      </div>
                      <div className="col-6 mb-2"> {Toy?.Mileage} miles</div>
                      <div className="col-6 mb-2 fw-600 text-dark">Model: </div>
                      <div className="col-6 mb-2"> {Toy?.model} </div>
                      <div className="col-6 mb-2 fw-600 text-dark">State: </div>
                      <div className="col-6 mb-2">{Toy?.state}</div>
                      <div className="col-6 mb-2 fw-600 text-dark">City:</div>
                      <div className="col-6 mb-2"> {Toy?.city} </div>
                      <div className="col-6 mb-2 fw-600 text-dark">Type:</div>
                      <div className="col-6 mb-2"> {Toy?.type} </div>
                      <div className="col-6 mb-2 fw-600 text-dark">Year:</div>
                      <div className="col-6 mb-2">
                        {" "}
                        {Toy?.date && new Date(Toy?.date).getFullYear()}{" "}
                      </div>
                    </div>
                  </div>
                  {/* <a href="#" className="btn custom-btn d-block my-3">
                    Send Message
                  </a> */}
                  <p className="text-center mt-5">
                    Offer ID : {Toy?.offerId || Toy?._id}{" "}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
