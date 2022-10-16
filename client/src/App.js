import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Onboarding from "./components/pages/Onboarding/Onboarding";
import Home from "./components/pages/Home/Home"
import { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Profile from "./components/pages/Home/Profile";

const colors = {
  brand: {
    'ash-gray': '#C6C8BB',
    'camel': '#CAA473',
    'timberwolf': '#dad0c7',
    'cultured': '#ededed',
    'cafe-noir': '#443220',
  },
};

const theme = extendTheme({ colors });

function App() {
  const [user, setUser] = useState();

  return (
    <ChakraProvider theme={theme}>
      {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing setUser={setUser} />} />
          <Route path="/onboarding" element={<Onboarding user={user} />} />
          <Route path="/home" element={<Home user={user} />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </ChakraProvider>
  );
}

export default App;