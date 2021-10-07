import "./style.css";
import { useState } from "react";

const RenterPortal = ({ email, onLogout }) => {
  const [portal, setPortal] = useState("home");
  const [input, setInput] = useState("");

  const onInputChange = () => {
    setInput(document.getElementById("inputID").value);
  }

  function getRent() {
    return "20.00";
  }

  const submitInput = ( type ) => {
    //TODO: Add whatever was in the input to the corresponding database
    //input = the text to submit to the database
    if(type === "application") {
      alert("application submitted to: " + input);
    }
    if(type === "maintenance") {
      if (document.getElementById('checkboxID').checked) {
        alert("high priority maintenance request: " + input);
      }
      else {
        alert("lot priority maintenance request: " + input);
      }
    }
    if(type === "rent") {
      alert("rent paid: " + input);
    }
    setPortal("home");
  }

  return (
    <div className="owner">
      <span className="heading">
        MadRentals
        <br />
      </span>
      {portal === "home" ? (
        <div>
          <span className="subheading">
            {email} <br />
          </span>
          <button className="button" onClick={() => setPortal("applications")}>
            Submit New Application
          </button>
          <button className="button" onClick={() => setPortal("maintenance")}>
            Submit Maintenance Request
          </button>
          <button className="button" onClick={() => setPortal("rent")}>
            View and Pay Rent
          </button>
          <button className="button" onClick={() => onLogout()}>
            Logout
          </button>
        </div>
      ) : portal === "applications" ? (
        <div>
          <span className="subheading">
            New Application <br />
          </span>
          <span className="label">email of owner</span>
          <input id="inputID" className="input" onChange={() => onInputChange} />
          <button className="button" onClick={() => submitInput("application")}>
            Submit
          </button>
          <button className="button" onClick={() => setPortal("home")}>
            Back
          </button>
        </div>
      ) : portal === "maintenance" ? (
        <div>
          <span className="subheading">
            Maintenance Request <br />
          </span>
          <span className="label">description</span>
          <input id="inputID" className="input" onChange={() => onInputChange} />
          <span className="label">high priority? <br/></span>
          <input id="checkboxID" className="checkbox" type="checkbox" />
          <button className="button" onClick={() => submitInput("maintenance")}>
            Submit
          </button>
          <button className="button" onClick={() => setPortal("home")}>
            Back
          </button>
        </div>
      ) : (
        <div>
          <span className="subheading">
            Current Rent Owed: ${getRent()} <br />
          </span>
          <span className="label">amount</span>
          <input id="inputID" className="input" onChange={() => onInputChange} />
          <button className="button" onClick={() => submitInput("rent")}>
            Pay
          </button>
          <button className="button" onClick={() => setPortal("home")}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default RenterPortal;
