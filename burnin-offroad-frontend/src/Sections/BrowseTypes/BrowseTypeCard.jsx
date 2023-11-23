const BrowseTypeCard = ({ toy }) => {
  return (
    <a
      href={`/product-details/${toy?._id}`}
      className="text-decoration-none text-dark"
    >
      <div className="box">
        <div
          className="car-image"
          style={{
            backgroundImage: `url(${toy?.images[0].img})`,
          }}
        ></div>
        <div className="p-3 py-4">
          <h6 className="car-title"> {toy?.title} </h6>
          <h5 className="fw-bold"> ${toy?.amount} </h5>
        </div>
      </div>
    </a>
  );
};

export default BrowseTypeCard;
