import { useEffect } from "react";
import useAllToys from "../../hooks/useAllToys";
import BrowseTypeCard from "./BrowseTypeCard";
import { Link } from "react-router-dom";

const BrowseByTypes = () => {
  const { allToys } = useAllToys();
  useEffect(() => {
    const scrollContainer = document.getElementById("boxes-container");

    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    };

    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const generateGrid = () => {
    let grid = [];
    allToys?.data &&
      allToys?.data.forEach(
        (toy, idx) =>
          grid.push(
            <a
              href={`/product-details/${toy?._id}`}
              className="text-decoration-none text-dark"
              key={idx}
            >
              <div className="box">
                <div
                  className="car-image"
                  style={{
                    backgroundImage: `url(${toy?.images[0]})`,
                  }}
                ></div>
                <div className="p-3 py-4">
                  <h6 className="car-title"> {toy?.title} </h6>
                  <h5 className="fw-bold"> ${toy?.amount} </h5>
                </div>
              </div>
            </a>
          )
        // <BrowseTypeCard toy={toy} key={idx} />
      );

    // let num_stud = 23;
    // let grid = [];

    // for (let i = 1; i <= num_stud; i++) {
    //   grid.push(
    //     <div key={i} id={`box${i}`}>
    //       <a href="#" className="text-decoration-none text-dark">
    //         <div className="box">
    //           <div
    //             className="car-image"
    //             style={{
    //               backgroundImage: "url(/assets/images/car-example.jpg)",
    //             }}
    //           ></div>
    //           <div className="p-3 py-4">
    //             <h6 className="car-title">2019 CAN AM X3 MAX RR* </h6>
    //             <h5 className="fw-bold">13.500$</h5>
    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //   );
    // }

    return grid;
  };

  return (
    <div id="section-2" className="container" style={{ margin: "5em auto" }}>
      <div>
        <h2
          className="text-center fw-bold"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          BROWSE BY TYPES
        </h2>
      </div>
      <div data-aos="fade-right" data-aos-duration="600">
        <h3>FEATURED TOYS</h3>
      </div>
      <div
        id="boxes-container"
        className="d-flex align-items-center overflow-x-scroll"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        {generateGrid()}
      </div>

      <div>
        <div
          className="text-center my-4"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Link to={"/listings"} className="custom-btn btn ">VIEW MORE LISTINGS</Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseByTypes;
