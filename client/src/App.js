import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/pages/Landing/Landing";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Landing />
    </UserProvider>
  );
}

export default App;
