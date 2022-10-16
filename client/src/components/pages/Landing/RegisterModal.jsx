import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterModal({ setUser, closeModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [shoeSize, setShoeSize] = useState();
  const [pantsSize, setPantsSize] = useState();
  const [shirtSize, setShirtSize] = useState();
  const [jacketSize, setJacketSize] = useState();
  const [dressSize, setDressSize] = useState();
  const [sweaterSize, setSweaterSize] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
        sizing: {
        shoesize: shoeSize,
        pantsize: pantsSize,
      },
      gender: gender,
      username: username,
      password: password,
      tags: []
    };

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    };
    axios
      .post("http://localhost:8000/users/add", data, { headers })
      .then((res) => {
        setUser(res.data);
        navigate("/onboarding");
        closeModal(false);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="w-screen h-screen bg-transparent/[0.5] fixed flex justify-center items-center z-10">
      <div className="w-1/2 rounded-md bg-timberwolf flex flex-col p-6">
        <div className="flex justify-end text-camel text-bold text-xl border-none">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        {/* Title */}
        <div className="inline-block text-left text-camel font-bold mt-2 text-3xl mb-5">
          <h1 className="md-2">Welcome, we are glad to have you.</h1>
        </div>
        {/* Body */}
        <div className="flex justify-center items-center font-md text-center">
          {/* Register Form */}
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Username"
              type="text"
              placeholder="Username"
              fieldName={"Username"}
              stateChanger={setUsername}
            />
            <div className="flex flex-row">
              <FormInput
                fieldName="Password"
                type="password"
                placeholder="Password"
                stateChanger={setPassword}
              />
              <FormInput
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                fieldName={"Confirm Password"}
              />
            </div>
            <div>
              <FormInput
                label="Gender"
                type="text"
                placeholder="Gender"
                fieldName={"Gender"}
                stateChanger={setGender}
              />
            </div>
            <div className="flex flex-row">
              <FormInput
                label="Shoe Size"
                type="number"
                placeholder="Shoe Size"
                fieldName={"Shoe Size"}
                stateChanger={setShoeSize}
              />
              <FormInput
                label="Pants Size"
                type="number"
                placeholder="Pants Size"
                fieldName={"Pants Size"}
                stateChanger={setPantsSize}
              />
            </div>
            <div className="flex flex-row">
              <FormInput
                label="Shirt Size"
                type="number"
                placeholder="Shirt Size"
                fieldName={"Shirt Size"}
              />
              <FormInput
                label="Jacket Size"
                type="number"
                placeholder="Jacket Size"
                fieldName={"Jacket Size"}
              />
            </div>
            <div className="flex flex-row">
              <FormInput
                label="Dress Size"
                type="number"
                placeholder="Dress Size"
                fieldName={"Dress Size"}
              />
              <FormInput
                label="Sweater Size"
                type="number"
                placeholder="Sweater Size"
                fieldName={"Sweater Size"}
              />
            </div>
            <div className="flex justify-center">
              {/* signup button */}
              <button
                className="w-1/2 inline-block px-6 py-2.5 bg-camel text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out mt-3"
                type="submit"
              >
                Sign-up
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

export default RegisterModal;
