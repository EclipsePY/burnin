import axios from "axios";
import { useReducer, useState } from "react";
import ImageUploader from "react-images-upload";

const ToysFileUpload = () => {
  const [pictures, setPictures] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const API_KEY = "96f5d65f91ed9a5e3ae4633d88c29a73";

  const handleImageUpload = async () => {
    try {
      const uploadedImagesArray = [];

      for (const image of pictures) {
        const formData = new FormData();
        formData.append("image", image);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${API_KEY}`,
          formData
        );

        uploadedImagesArray.push(response.data.data.url_viewer);
      }

      setUploadedImages(uploadedImagesArray);
      setPictures([]);
    } catch (error) {
      console.error("Error uploading images to ImgBB:", error);
    }
  };

  const onDrop = (pictureFiles) => {
    setPictures(pictureFiles);
  };

  console.log(uploadedImages);
  return (
    <>
      <button onClick={handleImageUpload}>Upload</button>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        withPreview={true}
      />
    </>
  );
};

export default ToysFileUpload;
