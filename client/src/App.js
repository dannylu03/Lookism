import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Onboarding from "./components/pages/Onboarding/Onboarding";
import Home from "./components/pages/Home/Home"
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
        <Route path="/onboarding" element={<Onboarding user={user} />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;