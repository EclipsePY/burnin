import React, { useState } from "react";
import axios from "axios";
import { notifyError, notifySuccess } from "./Toast/Toast";
import ToysFileUpload from "./ToysFileUpload";
import ImageUploader from "react-images-upload";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./Checkout";

const ModalForm = ({ p }) => {
  const [shop, setShop] = useState({
    title: "",
    type: "Adventure Bikes",
    Mileage: "",
    amount: "",
    model: "",
    state: "",
    city: "",
    offerId: "",
    description: "",
    date: new Date(),
    // images: [],
  });
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const API_KEY = "a707a44eb363c7eb4b5284f84243da02";
  // console.log(p);
  const [cardOpen, setCardOpen] = useState(false);

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setCardOpen(true);
    if (pictures.length) {
      try {
        const uploadedImagesArray = [];

        for (const image of pictures) {
          const formData = new FormData();
          formData.append("image", image);

          const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${API_KEY}`,
            formData
          );

          uploadedImagesArray.push(response.data.data.url);
        }

        setUploadedImages(uploadedImagesArray);

        if (uploadedImagesArray.length) {
          let data = {
            ...shop,
            images: uploadedImagesArray,
          };

          fetch("http://localhost:8080/api/v1/toys/new-toys", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((dt) => {
              // setOpen(false);
              // console.log(dt?.data?._id);
              navigate(`/payment/${dt?.data?._id}`);
              window.location.reload();
              // if (data?.status === 200) {
              //   notifySuccess("Successfully created toys!");
              // } else {
              //   notifyError("Error while creating toys!");
              // }
            })
            .catch((err) => {
              notifyError(err?.message);
            });
        } else {
          fetch("http://localhost:8080/api/v1/toys/new-toys", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(shop),
          })
            .then((res) => res.json())
            .then((dt) => {
              // setOpen(false);
              navigate(`/payment/${dt?.data?._id}`);
              window.location.reload();

              // if (data?.status === 200) {
              //   notifySuccess("Successfully created toys!");
              // } else {
              //   notifyError("Error while creating toys!");
              // }
            })
            .catch((err) => {
              notifyError(err?.message);
            });
        }

        // console.log(shop);
      } catch (error) {
        console.error("Error uploading images to ImgBB:", error);
      }
    } else {
      fetch("http://localhost:8080/api/v1/toys/new-toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shop),
      })
        .then((res) => res.json())
        .then((dt) => {
          // setOpen(false);
          navigate(`/payment/${dt?.data?._id}`);
          window.location.reload();

          // if (data?.status === 200) {
          //   notifySuccess("Successfully created toys!");
          // } else {
          //   notifyError("Error while creating toys!");
          // }
        })
        .catch((err) => {
          notifyError(err?.message);
        });
    }
  };

  const onDrop = (pictureFiles) => {
    setPictures(pictureFiles);
  };

  return (
    <>
      <div
        style={{ width: "100%" }}
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        ariaLabelledby="exampleModalLabel"
        ariaHidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{
            maxWidth: "700px",
            width: "100%",
            backgroundColor: "white",
            height: "500px",
            marginTop: "100px",
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 classNam e="modal-title" id="exampleModalLabel">
                Add toys
              </h5>
              <span
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ cursor: "pointer" }}
              >
                <svg
                  stroke="currentColor"
                  fill="#E72B29"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  fill-rule="evenodd"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
                </svg>
              </span>
            </div>
            <div className="modal-body">
              <form className="w-full">
                <div className="flex">
                  <label for="recipient-name" className="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-100 py-2 px-3 border fs-6 form-control"
                    id="recipient-name"
                    value={shop?.title}
                    onChange={(e) =>
                      setShop({ ...shop, title: e.target.value })
                    }
                  />
                </div>

                <div
                  className="form-group"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <div style={{ width: "100%" }}>
                    <label for="recipient-name" className="col-form-label">
                      Type
                    </label>
                    <select
                      className="form-select py-2 px-3"
                      value={shop?.type}
                      onChange={(e) =>
                        setShop({ ...shop, type: e.target.value })
                      }
                    >
                      {/* <option value="type">Type</option> */}
                      <option value="Adventure Bikes" selected>
                        Adventure Bikes
                      </option>
                      <option value="Aircraft">Aircraft</option>
                      <option value="Sandcar 1">Sandcar 1</option>
                      <option value="Sandcar 2">Sandcar 2</option>
                      <option value="Sandcar 3">Sandcar 3</option>
                      <option value="Sandcar 4">Sandcar 4</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ width: "100%" }}>
                    <label for="recipient-name" className="col-form-label">
                      Mileage:
                    </label>
                    <input
                      type="number"
                      className="w-100 py-2 px-3 border form-control"
                      id="recipient-name"
                      value={shop?.Mileage}
                      onChange={(e) =>
                        setShop({ ...shop, Mileage: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <label for="recipient-name" className="col-form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="w-100 py-2 px-3 border form-control"
                      id="recipient-name"
                      value={shop?.amount}
                      onChange={(e) =>
                        setShop({ ...shop, amount: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ width: "100%" }}>
                    <label for="recipient-name" className="col-form-label">
                      state
                    </label>
                    <input
                      type="text"
                      className="w-100 py-2 px-3 border form-control"
                      id="recipient-name"
                      value={shop?.state}
                      onChange={(e) =>
                        setShop({ ...shop, state: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <label for="recipient-name" className="col-form-label">
                      Model
                    </label>
                    <input
                      type="text"
                      className="w-100 py-2 px-3 border form-control"
                      id="recipient-name"
                      value={shop?.model}
                      onChange={(e) =>
                        setShop({ ...shop, model: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ width: "100%" }}>
                    <label for="recipient-name" className="col-form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-100 py-2 px-3 border form-control"
                      id="recipient-name"
                      value={shop?.city}
                      onChange={(e) =>
                        setShop({ ...shop, city: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    value={shop?.description}
                    onChange={(e) =>
                      setShop({ ...shop, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="p-5">
              {/* <ToysFileUpload /> */}
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                withPreview={true}
              />
            </div>

            <div className="modal-footer gap-3">
              <button
                type="button"
                className="pricing-button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="pricing-button is-featured"
                onClick={handleSubmitData}
                // data-bs-dismiss="modal"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
