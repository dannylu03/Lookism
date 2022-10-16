import React from "react";
import SideBar from "./SideBar";
import SideBarSection from "./SideBarSection";
import SwipePage from "./SwipePage";
import {HStack } from "@chakra-ui/react";

function Home ({ user }) {
    const [section, setSection] = React.useState('profile');

    return (
        <HStack>
            <SideBarSection section={section} />
            <SideBar section={section} setSection={setSection} user={user}/>
            {/* <SwipePage /> */}
        </HStack>
    );
}

export default Home;
