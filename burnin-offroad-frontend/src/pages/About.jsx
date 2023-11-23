import { useEffect, useState } from "react";

const About = () => {
  const dt1 = [
    "Browse our listings on our website, instagram, or facebook and pick out an item you want to buy.",
    "Once you found an item you will find the sellers contact details listed in the description of the product.",
    "Contact the seller, buy, and ride!",
  ];

  const dt2 = [
    "Have an OffRoad vehicle or product you would like to sell? Head over to the shop and choose the seller option that works best for you.",
    "Once you selected a bought a spot on the site. Sit back and wait for those offers to start rolling in!",
    "Make a deal and meet to sell or trade your product. Remember to always meet in a public place!",
  ];

  const [data, setData] = useState(dt1);

  useEffect(() => {
    let buyerBtn = document.getElementById("buyer-btn");
    let sellerBtn = document.getElementById("seller-btn");
    buyerBtn?.addEventListener("click", (e) => {
      buyerBtn.classList.add("active");
      sellerBtn.classList.remove("active");
      setData(dt1);
    });
    sellerBtn?.addEventListener("click", (f) => {
      sellerBtn.classList.add("active");
      buyerBtn.classList.remove("active");
      setData(dt2);
    });
    return () => {
      buyerBtn.removeEventListener("click", (f) => {
        buyerBtn.classList.add("active");
        sellerBtn.classList.remove("active");
      });
      sellerBtn.removeEventListener("click", (f) => {
        sellerBtn.classList.add("active");
        buyerBtn.classList.remove("active");
      });
    };
  }, []);

  return (
    <div>
      <div id="hero-about">
        <div
          className="text-center buttons-container"
          data-aos="fade"
          data-aos-duration="400"
        >
          <a
            href="#"
            className={"active btn custom-btn"}
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
            id="buyer-btn"
            // onClick={() => setBtn("buyer")}
          >
            BUYER
          </a>
          <a
            href="#"
            className={" btn custom-btn"}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            id="seller-btn"
            // onClick={() => setBtn("seller")}
          >
            SELLER
          </a>
        </div>
        <div className="container py-5 " data-aos="fade">
          <div className="row align-items-center">
            <div className="row align-items-center my-4">
              <div
                className="col-12 col-sm-6 text-center"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src="/assets/images/red-car.png" className="img-fluid" />
              </div>
              <div
                className="col-12 col-sm-6 text-dark text-end"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <h1 className="fw-bold">Step 1</h1>
                <h5 id="step-1">{data[0]}</h5>
              </div>
            </div>
            <div className="row align-items-center my-4">
              <div
                className="col-12 col-sm-6 text-dark"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h1 className="fw-bold">Step 2</h1>
                <h5 id="step-2">{data[1]}</h5>
              </div>
              <div
                className="col-12 col-sm-6 text-center text-end"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <img src="/assets/images/red-car.png" className="img-fluid" />
              </div>
            </div>
            <div className="row align-items-center my-4">
              <div
                className="col-12 col-sm-6 text-center"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <img src="/assets/images/red-car.png" className="img-fluid" />
              </div>
              <div
                className="col-12 col-sm-6 text-dark text-end"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <h1 className="fw-bold">Step 3</h1>
                <h5 id="step-3">{data[2]}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
