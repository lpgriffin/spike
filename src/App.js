import { default as Login } from "./Components/Login/index";
import { default as RenterPortal } from "./Components/RenterPortal/index";
import { default as OwnerPortal } from "./Components/OwnerPortal/index";
import "./App.css";
import { useState } from "react";

function App() {
  const [userEmail, setUserEmail] = useState(undefined);
  const [userType, setUserType] = useState("renter");

  const onLogin = (email, password) => {
    //TODO: Check for email & password combination correctness
    if (password && email) {
      //TODO: Check if user is a renter, change state accordingly
      //if(fetchUserType(email) === "renter") setUserType("renter");
      setUserEmail(email);
    } else {
      alert("Incorrect email or password, please try again");
    }
  };
  const onRegister = (email, password) => {
    //TODO: add register page
    alert("register " + email + " " + password);
  };
  const onLogout = (email, password) => {
    setUserType("renter");
    setUserEmail(undefined);
  };

  return (
    <div className="App">
      {!userEmail ? (
        <Login onLogin={onLogin} onRegister={onRegister} />
      ) : userType === "owner" ? (
        <OwnerPortal email={userEmail} onLogout={onLogout} />
      ) : (
        <RenterPortal email={userEmail} onLogout={onLogout} />
      )}
    </div>
  );
}

export default App;
