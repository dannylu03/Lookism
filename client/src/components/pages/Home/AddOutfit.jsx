import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddOutfitModal({ user, closeModal }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState();
  const [tags, setTags] = useState([]);
  const [clothes, setClothes] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", name);
    data.append("img", img);
    data.append("tags", tags);
    data.append("clotheslist", clothes);

    //   name: name,
    //   img: img,
    //   tags: tags,
    //   clotheslist: clothes,
    // };
    console.log(user);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data'",
        Authorization: `Bearer ${user.token}`,
      },
    };
    // const headers = {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   "Content-Type": "multipart/form-data'",
    // };
    let outfit = axios.post("http://localhost:8000/cards/add", data, config);
    console.log(data);
    for (const value of data.values()) {
      console.log(value);
    }
    closeModal(false);
  };

  return (
    <div className="w-screen h-screen bg-transparent/[0.5] fixed top-0 flex justify-center items-center">
      <div className="w-1/2 rounded-md bg-timberwolf flex flex-col p-6">
        <div className="flex justify-end text-camel text-bold text-xl border-none">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        {/* Title */}
        <div className="inline-block text-left text-camel font-bold mt-2 text-3xl mb-5">
          <h1 className="md-2">Add your outfit</h1>
        </div>
        {/* Body */}

        <div className="flex justify-center items-center font-md text-center">
          {/* Register Form */}
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div>
              <FormInput
                fieldName="Name"
                type="text"
                placeholder="Name"
                stateChanger={setName}
              />
            </div>
            <label htmlFor={img} className="text-cafe-noir text-sm text-left">
              Thumbnail
            </label>
            <input
              class="border-2 border-camel rounded-md p-2 mb-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              onChange={handleFileChange}
            />

            <div>
              <FormInput
                fieldName="Tags (Seperated by commas)"
                type="text"
                placeholder="Tags"
                stateChanger={setTags}
              />
            </div>
            <div>
              <FormInput
                label="Gender"
                type="text"
                placeholder="Gender"
                fieldName={"Gender"}
              />
            </div>
            <FormInput
              label="Clothes List (Urls seperated by commas)"
              type="text"
              placeholder="Clothes List"
              fieldName={"Clothes List"}
            />

            <div className="flex justify-center">
              {/* signup button */}
              <button
                className="w-1/2 inline-block px-6 py-2.5 bg-camel text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out mt-3"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const FormInput = ({ fieldName, type, placeholder, stateChanger }) => {
  const handleChange = (e) => {
    e.preventDefault();
    stateChanger(e.target.value);
    console.log("sss");
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={fieldName} className="text-cafe-noir text-sm text-left">
        {fieldName}
      </label>
      {stateChanger ? (
        <input
          type={type}
          name={fieldName}
          id={fieldName}
          placeholder={placeholder}
          className="border-2 border-camel rounded-md p-2 mb-3"
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <input
          type={type}
          name={fieldName}
          id={fieldName}
          placeholder={placeholder}
          className="border-2 border-camel rounded-md p-2 mb-3"
        />
      )}
    </div>
  );
};

export default AddOutfitModal;
