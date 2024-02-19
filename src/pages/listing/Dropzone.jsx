import React, { useRef, useState } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { img } from "../../manager/features/allState";
import SubmitForm from "./formApi/SubmitForm";

const Dropzone = () => {
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  if (images) {
    images.forEach((element) => {
      dispatch(img(element.id));
    });
  }
  const fileInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const formdata = new FormData();

  const selectFunc = () => fileInputRef.current.click();

  const selectFiles = async (event) => {
    const files = event.target.files;

    if (files.length === 0) return;
    setLoading(true);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (files[i].size > 1024 && !images.some((e) => e.name === file.name)) {
        formdata.append("file", file);
      }
    }

    try {
      const response = await axios.post(
        "https://api.gimyhome.az/api/announcement/image-upload",
        formdata
      );

      setImages((prevImages) => [...prevImages, response.data]);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setLoading(false);
    }
  };
  const removeFunc = (index) => {
    const filterRemove = images.filter((item) => item.id !== index);
    setImages(filterRemove);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <div className="flex flex-wrap gap-2  max-w-[600px]  lg:h-20 sm:h-[100px] ">
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          images.map((item, index) => (
            <div className="w-[158px] relative  cursor-pointer border border-[#E3E5E8] overflow-hidden rounded-[4px] h-[122px] ">
              <div className=" w-full absolute top-0 z-10">
                <img
                  onClick={() => removeFunc(item.id)}
                  className="h w-[20px] object-cover"
                  src="formIcon/delete-button.svg"
                  alt=""
                />
              </div>
              <img
                className="h-full w-full object-cover"
                key={index}
                src={item.url}
                alt=""
              />
            </div>
          ))
        )}

        <input
          type="file"
          className="absolute z-1000 opacity-1 top-8 hidden"
          multiple
          ref={fileInputRef}
          onChange={selectFiles}
        />
        <img src="formIcon/Photo-Add.svg" alt="dropzone" onClick={selectFunc} />
      </div>
      {/* <Info /> */}
      <SubmitForm/>
    </div>
  );
};

export default Dropzone;
