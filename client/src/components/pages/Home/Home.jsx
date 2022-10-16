import React from "react";
import SideBar from "./SideBar";
import SwipePage from "./SwipePage";


function Home ({user, setUser}) {
    return (
        <div className="h-full w-full">
            <SideBar user={user}/>
            <SwipePage user={user} setUser={setUser}/>
        </div>
    );
}

export default Home;
