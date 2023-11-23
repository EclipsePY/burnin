import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAllToys from "../hooks/useAllToys";

const Products = () => {
  const [filter, setFilters] = useState({
    type: "all",
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    minMile: "",
    maxMile: "",
    keyword: "",
  });

  // Clearing Filter data
  const handleClearFilter = (e) => {
    e.preventDefault();
    setFilters({
      type: "",
      minPrice: "",
      maxPrice: "",
      minYear: "",
      maxYear: "",
      minMile: "",
      maxMile: "",
      keyword: "",
    });
  };

  const { allToys, isLoading } = useAllToys();

  const [filteredData, setFilteredData] = useState(allToys?.data);
  console.log(filteredData);

  useEffect(() => {
    // Function to apply filters
    const applyFilters = () => {
      const filteredResult = allToys?.data.filter((item) => {
        // Apply filters based on your conditions
        return (
          (filter.type === "all" || item.type === filter.type) &&
          (filter.minPrice === "" ||
            parseInt(item.amount) >= parseInt(filter.minPrice)) &&
          (filter.maxPrice === "" ||
            parseInt(item.amount) <= parseInt(filter.maxPrice)) &&
          (filter.maxMile === "" ||
            parseInt(item.Mileage) <= parseInt(filter.maxMile)) &&
          (filter.minMile === "" ||
            parseInt(item.Mileage) >= parseInt(filter.minMile)) &&
          (filter.minYear === "" ||
            parseInt(new Date(item.date).getFullYear()) >=
              parseInt(filter.minYear)) &&
          (filter.maxYear === "" ||
            parseInt(new Date(item.date).getFullYear()) <=
              parseInt(filter.maxYear)) &&
          // new Date(Toy?.date).getFullYear()
          (filter.keyword === "" ||
            item.title.toLowerCase().includes(filter.keyword.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(filter.keyword.toLowerCase()))
        );
      });

      setFilteredData(filteredResult);
    };

    applyFilters();
  }, [filter, allToys?.data]);

  return (
    <div>
      <div id="hero-products">
        <div className="container">
          <h2
            className="text-uppercase mb-4"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Buy Products
          </h2>
          <div
            className="filters-container"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="filters-container-responsive d-flex align-items-center justify-content-center">
              <div>
                <select
                  className="form-select"
                  value={filter?.type}
                  onChange={(e) =>
                    setFilters({ ...filter, type: e.target.value })
                  }
                >
                  <option value="all">ALL</option>
                  <option value="Adventure Bikes">Adventure Bikes</option>
                  <option value="Aircraft">Aircraft</option>
                  <option value="Sandcar 1">Sandcar 1</option>
                  <option value="Sandcar 2">Sandcar 2</option>
                  <option value="Sandcar 3">Sandcar 3</option>
                  <option value="Sandcar 4">Sandcar 4</option>
                </select>
              </div>
              <div className="d-flex align-items-center ">
                <input
                  type="number"
                  className="form-control filters-input border-right-radius-none"
                  placeholder="Min Price"
                  value={filter?.minPrice}
                  onChange={(e) =>
                    setFilters({ ...filter, minPrice: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="form-control filters-input border-left-radius-none"
                  placeholder="Max Price"
                  value={filter?.maxPrice}
                  onChange={(e) =>
                    setFilters({ ...filter, maxPrice: e.target.value })
                  }
                />
              </div>
              <div className="d-flex align-items-center ">
                <input
                  type="number"
                  className="form-control filters-input border-right-radius-none"
                  placeholder="Min Year"
                  value={filter?.minYear}
                  onChange={(e) =>
                    setFilters({ ...filter, minYear: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="form-control filters-input border-left-radius-none"
                  placeholder="Max Year"
                  value={filter?.maxYear}
                  onChange={(e) =>
                    setFilters({ ...filter, maxYear: e.target.value })
                  }
                />
              </div>
              <div className="d-flex align-items-center ">
                <input
                  type="number"
                  className="form-control filters-input border-right-radius-none"
                  placeholder="Min Mile"
                  value={filter?.minMile}
                  onChange={(e) =>
                    setFilters({ ...filter, minMile: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="form-control filters-input border-left-radius-none"
                  placeholder="Max Mile"
                  value={filter?.maxMile}
                  onChange={(e) =>
                    setFilters({ ...filter, maxMile: e.target.value })
                  }
                />
              </div>
            </div>
            <div onClick={handleClearFilter}>
              <a
                href="#"
                className="text-dark text-decoration-none text-end d-block fw-medium"
              >
                Clear all
              </a>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-end">
              <input
                type="search"
                className="form-control search-input"
                placeholder="Enter keyword"
                value={filter?.keyword}
                onChange={(e) =>
                  setFilters({ ...filter, keyword: e.target.value })
                }
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
      <section id="products-section-2">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center ">
            <div
              className="mx-4 mx-sm-0"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h2 className="fw-bold">{`${filteredData?.length} ${
                filteredData?.length > 1 ? `Results` : "Result"
              }`}</h2>
            </div>
            <div
              className="mx-4 mx-sm-0 d-flex align-items-center"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <h6 className="me-1 mb-0" style={{ minWidth: "70px" }}>
                Sort by:
              </h6>
              <select className="form-select second-select">
                <option value="Date Listed:">Date Listed:</option>
                <option value="1">Most Relevant</option>
                <option value="2">Date Listed: Newest</option>
                <option value="3">Price: Highest</option>
                <option value="4">Price: Lowest</option>
                <option value="5">Year: Highest</option>
                <option value="6">Year: Lowest</option>
                <option value="7">Mileage: Highest</option>
                <option value="7">Mileage: Lowest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products-section-3"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="container">
          <div className="row" id="product-parent">
            {/* <div className=""> */}
            {isLoading ? (
              "loading..."
            ) : (
              <>
                {allToys?.data &&
                  filteredData?.map((toy, idx) => {
                    return (
                      <Link
                        key={idx}
                        to={`/product-details/${toy?._id}`}
                        className="text-decoration-none text-dark col-6 col-md-6 col-lg-4 col-xl-4"
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
                            <h5 className="fw-bold"> {toy?.amount} </h5>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </>
            )}
            {/* </div> */}
          </div>
          <div className="page-numbers mb-5 mt-4">
            <div className="d-flex justify-content-center">
              <a href="#" className="page-number page-number-active">
                1
              </a>
              <a href="#" className="page-number">
                2
              </a>
              <a href="#" className="page-number">
                3
              </a>
              <a href="#" className="page-number">
                4
              </a>
              <a href="#" className="page-number">
                5
              </a>
              <a href="#" className="page-number">
                6
              </a>
              <a href="#" className="page-number">
                7
              </a>
              <a href="#" className="page-number ms-3">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
