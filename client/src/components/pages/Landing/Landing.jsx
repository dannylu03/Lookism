import React from "react";
import { useState } from "react";
import landing_image from "../../../assets/image/landing_image.png";
import logo from "../../../assets/image/lookism.png"
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import Wave from 'react-wavify'

function Landing({ setUser }) {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <div className="relative flex flex-col h-screen items-center justify-center bg-cultured">
      <img src={logo} alt="Lookism" className="h-1/10 w-1/5 top-0 left-0 p-4 absolute"/>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img
          src={landing_image}
          alt="card images of styles"
          className="h-1/2"
        />
        <h3 className="text-2xl font-bold text-camel">
          Find Your Lookism. Discover Yourself.
        </h3>
        <div className="flex flex-col justify-around w-1/2">
          <button
            className="w-full z-5 bg-cultured inline-block px-6 py-2 border-2 border-camel text-camel font-medium text-xs leading-normal uppercase rounded hover:shadow-md transition duration-500 ease mt-3"
            onClick={() => {
              setOpenRegisterModal(true);
            }}
          >
            Sign-up
          </button>

          <button
            className="w-full z-10 inline-block px-6 py-2.5 bg-camel text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:shadow-md transition duration-500 ease mt-3"
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
      {openLoginModal && <LoginModal setUser = {setUser} closeModal={setOpenLoginModal} />}
      <Wave fill='#caa473' className="absolute bottom-0 -z-5"
        paused={false}
        options ={{
          height: 10,
          amplitude: 80,
          speed: 0.05,
          points: 4,
          opacity:0.6
        }}
      />
      <Wave fill='#caa473' className="absolute bottom-0 -z-5"
        paused={false}
        options ={{
          height: 80,
          amplitude: 60,
          speed: 0.1,
          points: 4,
          opacity:0.4
        }}
      />
      <Wave fill='#caa473' className="absolute bottom-0 -z-5"
        paused={false}
        options ={{
          height: 80,
          amplitude: 40,
          speed: 0.15,
          points: 4,
          opacity:0.8
        }}
      />

    </div>
  );
}

export default Landing;
