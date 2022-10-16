import React from "react";
import SideBar from "./SideBar";
import SwipePage from "./SwipePage";
// import {HStack } from "@chakra-ui/react";

// function Home ({ user }) {
//     const [section, setSection] = React.useState('profile');

function Home ({user, setUser}) {
    return (
        <div className="h-full w-full">
            <SideBar user={user}/>
            <SwipePage user={user} setUser={setUser}/>
        </div>
    );
    // return (
    //     <HStack>
    //         <SideBarSection section={section} />
    //         <SideBar section={section} setSection={setSection} user={user}/>
    //         {/* <SwipePage /> */}
    //     </HStack>
}

export default Home;
