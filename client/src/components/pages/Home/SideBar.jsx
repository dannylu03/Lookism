import { BsFillPersonFill, BsFillHeartFill, BsPlus } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import React from "react";
import AddOutfitModal from "./AddOutfit";
import { useState } from "react";

function SideBar({ user }) {
  // const [active, setActive] = React.useState({text: "Profile"});
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-camel shadow-lg pt-5">
        <Divider />
        <SideBarIcon icon={<BsFillPersonFill size={"28"} />} text="Profile" />
        <SideBarIcon icon={<BsFillHeartFill size={"28"} />} text="Likes" />
        <SideBarIcon icon={<AiFillSetting size={"28"} />} text="Settings" />
        <button onClick={() => setOpenModal(true)}>
          <SideBarIcon icon={<BsPlus size={"28"} />} text="Add Outfit" />
        </button>
        {openModal && <AddOutfitModal user={user} closeModal={setOpenModal} />}

        <Divider />
      </div>
      <div className="w- h-auto m-0 ml-16 bg-timberwolf overflow-hidden">
        <div className="flex items-center jsutify-center h-16 m-0 p-0">
          <h5 className="text-camel tracking-wider font-bold text-lg mr-auto ml-4 my-auto align-middle">
            Title
          </h5>
        </div>
      </div>
    </div>
  );
}

const SideBarIcon = ({ icon, text }) => {
  return (
    <button className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </button>
  );
};

const Divider = () => <hr className="sidebar-divider" />;

export default SideBar;
