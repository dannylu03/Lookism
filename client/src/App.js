import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/pages/Landing/Landing";
import { UserProvider } from "./context/UserContext";
import SwipePage  from "./components/pages/Home/SwipePage";
import Home from "./components/pages/Home/Home";
import Onboarding from "./components/pages/Onboarding/Onboarding";

function App() {
  return (
    <UserProvider>
      {/* <Landing /> */}
      <Home />
      {/* <Onboarding /> */}
    </UserProvider>
  );
}

export default App;
