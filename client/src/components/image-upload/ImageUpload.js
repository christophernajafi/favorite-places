import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import NoProfilePic from "./no-profile-pic.jpg";

// eslint-disable-next-line
const ImageUpload = props => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    // console.log(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile;
    // eslint-disable-next-line
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
      // console.log("picked file: ", pickedFile);
      return;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    // eslint-disable-next-line
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
    // console.log("previewUrl: ", previewUrl);
    // send image path to backend
    // console.log("filePickerRef: ", filePickerRef);
    // console.log("image uploaded!");
  };

  // eslint-disable-next-line
  const profilePicUpload = async formData => {
    try {
      console.log("profilePicUpload: ", formData);
      const response = await axios.post("/api/profile-pics", formData);
      console.log("response: ", response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.jpeg,.png"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div>
        <div>
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {/* {!previewUrl && <p>Please pick an image.</p>} */}
          {!previewUrl && <img src={NoProfilePic} alt="no profile pic" />}
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={pickImageHandler}
        >
          Add Profile Pic
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
