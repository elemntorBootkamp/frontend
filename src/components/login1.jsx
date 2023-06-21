import React from "react";
import { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
  debugger
  const { keycloak, initialized } = useKeycloak();
  const [authenticated, setAuthenticated] = useState(false);
  debugger
  useEffect(() => {
    if (initialized) {
      console.log(keycloak.authenticated)
      setAuthenticated(keycloak.authenticated);
      console.log(keycloak.authenticated)
    }
  }, [initialized, keycloak.authenticated]);
  debugger
  const handleLogout = async () => {
    await keycloak.logout();
    setAuthenticated(false);
  };
  debugger
  const handleLogin = () => {
    keycloak.login();
  };
  debugger
  return (
    <div>
       <button onClick={handleLogout}>Logout</button>
      
        <button onClick={handleLogin}>Login</button>
    </div>
    // <div>
    // //   {initialized && authenticated ? (
    //     <button onClick={handleLogout}>Logout</button>
    //   ) : (
    //     <button onClick={handleLogin}>Login</button>
    //   )}
    // </div>
  );
};

export default Nav;