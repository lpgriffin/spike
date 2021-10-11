import "./style.css";
import { useState } from "react";
import Cards from "./Cards/index";

const OwnerPortal = ({ email, onLogout, data }) => {
  const [portal, setPortal] = useState("home");

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
            View Resident Applications
          </button>
          <button className="button" onClick={() => setPortal("maintenance")}>
            View Maintenance Requests
          </button>
          <button className="button" onClick={() => setPortal("rent")}>
            View Rent Payments
          </button>
          <button className="button" onClick={() => onLogout()}>
            Logout
          </button>
        </div>
      ) : portal === "applications" ? (
        <div>
          <span className="subheading">
            Applications <br />
          </span>
          <button className="button" onClick={() => setPortal("home")}>
            Back
          </button>
          <Cards email={email} user={"renter"} type={"applications"} />
        </div>
      ) : portal === "maintenance" ? (
        <div>
          <span className="subheading">
            Maintenance <br />
          </span>
          <button className="button" onClick={() => setPortal("home")}>
            Back
          </button>
          <Cards email={email} user={"renter"} type={"maintenance"}/>
        </div>
      ) : (
        <div>
          <span className="subheading">
            Rent <br />
          </span>
          <button className="button" onClick={() => setPortal("home")}>
            Back
          </button>
          <Cards email={email} user={"renter"} type={"rent"} />
        </div>
      )}
    </div>
  );
};

export default OwnerPortal;
