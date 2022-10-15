import React from "react";
import { useState } from "react";
import landing_image from "../../../assets/image/landing_image.png";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

function Landing({ setUser }) {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen items-center bg-cultured">
      <h1 className="font-bold text-3xl text-camel p-10">Lookism</h1>
      <div className="flex flex-col items-center">
        <img
          src={landing_image}
          alt="card images of styles"
          className="scale-75"
        />
        <h3 className="text-2xl text-cafe-noir">
          Find Your Lookism. Discover Yourself.
        </h3>
        <div className="flex flex-col justify-around w-1/2">
          <button
            className="w-full inline-block px-6 py-2 border-2 border-camel text-camel font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 transition duration-150 ease-in-out mt-3"
            onClick={() => {
              setOpenRegisterModal(true);
            }}
          >
            Sign-up
          </button>

          <button
            className="w-full inline-block px-6 py-2.5 bg-camel text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out mt-3"
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
      {openRegisterModal && (
        <RegisterModal setUser={setUser} closeModal={setOpenRegisterModal} />
      )}
      {openLoginModal && <LoginModal closeModal={setOpenLoginModal} />}
    </div>
  );
}

export default Landing;
