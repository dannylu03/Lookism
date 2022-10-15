import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SetUser = (props) => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    setUser(props.user);
  });
};

export default SetUser;
