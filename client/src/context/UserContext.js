import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState();

  const add = (user) => {
    setUser(user);
  };

  return <UserContext.Provider value={user} {...props} />;
}

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
