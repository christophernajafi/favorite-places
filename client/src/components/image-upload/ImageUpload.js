import React, { useRef, useState, useEffect } from "react";

import NoProfilePic from "./no-profile-pic.jpg";

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
    // send image path to backend
    // console.log(filePickerRef);
    // console.log("image uploaded!");
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
