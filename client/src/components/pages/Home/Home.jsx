import React from "react";
import SideBar from "./SideBar";
import SideBarSection from "./SideBarSection";
import SwipePage from "./SwipePage";


function Home () {
    return (
        <div>
            <SideBar />
            <SideBarSection />
            <SwipePage />
        </div>
    );
}

export default Home;