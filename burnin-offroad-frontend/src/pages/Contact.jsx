const Contact = () => {
  return (
    <div>
      <div id="hero-contact">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h1 className="fw-bold">Contact Us</h1>
              <h4 className="mt-4 mb-2 fw-600">Call or Text</h4>
              <h5 className="text-red fw-600">+123 345678</h5>
              <div className="d-flex justify-content-center justify-content-sm-start align-items-center mt-4">
                <h5 className="fw-600 mb-0 me-3">Follow us:</h5>
                <div className="socials">
                  <a
                    href="https://facebook.com"
                    className="m-0 me-3 fs-3"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    className="m-0 me-3 fs-3"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="m-0 me-3 fs-3"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <h3 className="text-center fw-bold">Send us a message</h3>
              <div className="contact-form">
                <form
                  action="mailto:sancho1111@protonmail.com"
                  method="get"
                  encType="text/plain"
                >
                  <div className="d-flex">
                    <input
                      type="text"
                      name="name"
                      className="form-control m-2"
                      placeholder="Your name"
                    />
                    <input
                      type="email"
                      name="email"
                      className="form-control m-2"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="d-flex">
                    <input
                      type="number"
                      name="number"
                      className="form-control m-2"
                      placeholder="Your number"
                    />
                    <input
                      type="text"
                      name="subject"
                      className="form-control m-2"
                      placeholder="Your subject"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows="7"
                    cols="120"
                    placeholder="Your Message"
                    className="form-control mt-2 "
                  ></textarea>
                  <input
                    className="btn custom-btn py-2 rounded-pill w-100 mt-4"
                    type="submit"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
