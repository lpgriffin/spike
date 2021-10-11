import { default as Login } from "./Components/Login/index";
import { default as RenterPortal } from "./Components/RenterPortal/index";
import { default as OwnerPortal } from "./Components/OwnerPortal/index";
import { default as Register } from "./Components/Register/index";
import spikejson from './spike.json';
import "./App.css";
import { useState } from "react";

function App() {
  const [userEmail, setUserEmail] = useState(undefined);
  const [userType, setUserType] = useState("owner");
  const [registering, setRegister] = useState(false);

  let values = JSON.parse(JSON.stringify(spikejson));

  const onLogin = (email, password) => {
    let found = false;
    for(let x = 0; x < values.Owners.length; x++) {
      if(values.Owners[x].Email === email && values.Owners[x].Password === password) {
        found = true;
        setUserEmail(email);
      }
    }
    for(let x = 0; x < values.Renters.length; x++) {
      if(values.Renters[x].Email === email && values.Renters[x].Password === password) {
        found = true;
        setUserEmail(email);
        setUserType("renter");
      }
    }
    if(!found) alert("Incorrect email or password, please try again");
  };

  const onRegister = () => {
    setRegister(true);
  };

  const finishRegister = (email) => {
    setRegister(false);
    setUserType("renter");
    setUserEmail(email);
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
        <Register onBack={onBack} onRegister={finishRegister} data={values} />
      ) : !userEmail ? (
        <Login onLogin={onLogin} onRegister={onRegister} data={values} />
      ) : userType === "owner" ? (
        <OwnerPortal email={userEmail} onLogout={onLogout} data={values} />
      ) : (
        <RenterPortal email={userEmail} onLogout={onLogout} data={values} />
      )}
    </div>
  );
}

export default App;
