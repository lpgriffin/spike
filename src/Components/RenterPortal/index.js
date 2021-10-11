import "./style.css";
import { useState } from "react";

const RenterPortal = ({ email, onLogout, data }) => {
  const [portal, setPortal] = useState("home");
  const [maintenance, setMaintenance] = useState("");
  const [application, setApplication] = useState("");
  const [rent, setRent] = useState("");

  const onMaintenanceChange = () => {
    setMaintenance(document.getElementById("maintenanceID").value);
  };

  const onApplicationChange = () => {
    setApplication(document.getElementById("applicationID").value);
  };

  const onRentChange = () => {
    setRent(document.getElementById("rentID").value);
  };

  function getRent() {
    for (let x = 0; x < data.Renters.length; x++) {
      if (data.Renters[x].Email === email) {
        return data.Renters[x].Rent;
      }
    }
  }

  const submitApplication = () => {
    let name = undefined;
    let owner = undefined;
    for (let x = 0; x < data.Owners.length; x++) {
      if (data.Owners[x].Email === application) {
        owner = data.Owners[x].Email;
      }
    }

    if(!owner) alert("Please input a valid email");

    for (let x = 0; x < data.Renters.length; x++) {
      if (data.Renters[x].Email === email) {
        name = data.Renters[x].Name;
      }
    }

    let toAdd = '{"Name":"' + name + '", "Email":"' + email + '"}';
    for (let x = 0; x < data.Owners.length; x++) {
      if (data.Owners[x].Email === owner) {
        let temp = new Array(data.Owners[x].Applications.length);
        for (let y = 0; y < data.Owners[x].Applications.length; y++) {
          temp[y] = data.Owners[x].Applications[y];
        }
        temp[data.Owners[x].Applications.length] = JSON.parse(toAdd);
        data.Owners[x].Applications = temp;
      }
    }
    console.log(data);
    setPortal("home");
  };

  const submitMaintenance = () => {
    let name = undefined;
    let owner = undefined;
    for (let x = 0; x < data.Renters.length; x++) {
      if (data.Renters[x].Email === email) {
        name = data.Renters[x].Name;
        owner = data.Renters[x].Owner;
      }
    }

    if (!owner || owner === "null") {
      alert("You must have an owner to submit a maintenance request");
      return;
    }

    let toAdd = '{"Name":"' + name + '", "Message":"' + maintenance + '", "Response":"null"}';
    for (let x = 0; x < data.Owners.length; x++) {
      if (data.Owners[x].Email === owner) {
        let temp = new Array(data.Owners[x].MaintenanceRequests.length);
        for (let y = 0; y < data.Owners[x].MaintenanceRequests.length; y++) {
          temp[y] = data.Owners[x].MaintenanceRequests[y];
        }
        temp[data.Owners[x].MaintenanceRequests.length] = JSON.parse(toAdd);
        data.Owners[x].MaintenanceRequests = temp;
      }
    }
    setPortal("home");
  };

  const submitRent = () => {
    for (let x = 0; x < data.Renters.length; x++) {
      if (data.Renters[x].Email === email) {
        data.Renters[x].Rent = data.Renters[x].Rent - rent;
        setPortal("home");
      }
    }
  };

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
          <input
            id="applicationID"
            className="input"
            onChange={() => onApplicationChange()}
          />
          <button className="button" onClick={() => submitApplication()}>
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
          <input
            id="maintenanceID"
            className="input"
            onChange={() => onMaintenanceChange()}
          />
          <span className="label">
            high priority? <br />
          </span>
          <input id="checkboxID" className="checkbox" type="checkbox" />
          <button className="button" onClick={() => submitMaintenance()}>
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
          <input
            id="rentID"
            className="input"
            onChange={() => onRentChange()}
          />
          <button className="button" onClick={() => submitRent()}>
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
