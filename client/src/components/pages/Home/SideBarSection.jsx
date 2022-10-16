import React from "react";
import Liked from "./Liked";
import Profile from "./Profile";

function SideBarSection ({section, user}) {
    return (
    <div className="w-5/6 h-auto m-0 ml-16 overflow-scroll top-0 left-0 bg-timberwolf">
        {section === 'profile' ? <Profile /> : <Liked />}
    </div>

    );
}   

export default SideBarSection;
