import { default as Login } from "./Components/Login/index";
import { default as RenterPortal } from "./Components/RenterPortal/index";
import { default as OwnerPortal } from "./Components/OwnerPortal/index";
import { default as Register } from "./Components/Register/index";
import * as fs from 'fs';
import "./App.css";
import { useState } from "react";

function App() {
  const [userEmail, setUserEmail] = useState(undefined);
  const [userType, setUserType] = useState("owner");
  const [registering, setRegister] = useState(false);

  const fs = require("fs");

  fs.readFile("./spike.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);

      // print all databases
      databases.forEach((db) => {
        console.log(`${db.name}: ${db.type}`);
      });
    }
  });

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

  const onRegister = () => {
    setRegister(true);
  };

  const finishRegister = (email) => {
    alert(email);
    setRegister(false);
    setUserType("owner");
    setUserEmail(undefined);
  };

  const onBack = () => {
    setRegister(false);
  };

  const onLogout = () => {
    setUserType("owner");
    setUserEmail(undefined);
  };

  return (
    <div className="App">
      {registering ? (
        <Register onBack={onBack} onRegister={finishRegister} />
      ) : !userEmail ? (
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
