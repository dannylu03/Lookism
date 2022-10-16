import React from "react";
import SideBar from "./SideBar";
import SideBarSection from "./SideBarSection";
import SwipePage from "./SwipePage";
import {HStack } from "@chakra-ui/react";

function Home ({ user, setUser }) {
    const [section, setSection] = React.useState('profile');
    return (
        <HStack>
            <SideBarSection section={section} />
            <SideBar section={section} setSection={setSection} user={user} />
            <div className="flex flex-row flex-grow min-w-screen justify-center">
                <SwipePage user={user} setUser={setUser} />
            </div>
        </HStack>
    );
}

export default Home;
