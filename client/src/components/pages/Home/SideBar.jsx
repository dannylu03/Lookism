import {BsFillPersonFill, BsFillHeartFill, } from 'react-icons/bs';
import {AiFillSetting} from 'react-icons/ai';
import React from 'react';

function SideBar ({setSection}) {
    // const [active, setActive] = React.useState({text: "Profile"});
    
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
                <Divider />
            </div>
        </div>
    );

}

const SideBarIcon = ({ icon, text }) => {
    return (
        <button className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </button>
    );
};

const Divider = () => <hr className="sidebar-divider" />;

export default SideBar;
