import React from "react";
import SideBar from "./SideBar";
import SideBarSection from "./SideBarSection";
import SwipePage from "./SwipePage";

function Home({ user }) {
  return (
    <div>
      <SideBar user={user} />
      <SideBarSection />
      {/* <SwipePage /> */}
    </div>
  );
}

export default Home;
