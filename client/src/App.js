import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Onboarding from "./components/pages/Onboarding/Onboarding"
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserProvider><Landing /></UserProvider>} />
        <Route path="/onboarding" element={<UserProvider><Onboarding/></UserProvider>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
