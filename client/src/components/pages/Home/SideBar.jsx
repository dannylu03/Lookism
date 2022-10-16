import { BsFillPersonFill, BsFillHeartFill, BsPlus } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import React from "react";
import AddOutfitModal from "./AddOutfit";
import { useState } from "react";

function SideBar ({setSection, user}) {
    // const [active, setActive] = React.useState({text: "Profile"});
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <div>
            <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-camel shadow-lg pt-5">
                <Divider />
                <button onClick={(e) => setSection('profile')}>
                  <SideBarIcon icon={<BsFillPersonFill size={"28"}/>} text="Profile"/>
                </button>
                <button onClick={(e) => setSection('liked')}>
                  <SideBarIcon icon={<BsFillHeartFill size={"28"}/>} text="Likes" />
                </button>
                  <SideBarIcon icon={<AiFillSetting size={"28"}/>} text="Settings" />
                <button onClick={() => setOpenModal(true)}>
                  <SideBarIcon icon={<BsPlus size={"28"} />} text="Add Outfit" />
                </button>
                {openModal && <AddOutfitModal user={user} closeModal={setOpenModal} />}
                <Divider />
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
