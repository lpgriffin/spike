import "./style.css";
import { useState } from 'react';

//email = user's email
//type = type of fetch; Either "rent", "applications", or "maintenance"
const Cards = ({ type, user, onClick1, onClick2 }) => {

  const[message, setMessage] = useState("");
  const updateMessage = () => {
    setMessage(document.getElementById("messageID").value);
  }

  const submitMessage = () => {
    alert("message submitted: " + message);
  }

  const viewMessage = (message) => {
    alert(message);
  }

  return (
    <div className="container">
      {type === "applications" ? (
        <ul className="card applications">
          <label className="cardheading">{/*user.email*/}John Smith</label>
          <button className="subbutton b2" onClick={() => onClick1}>
            Accept
          </button>
          <button className="subbutton" onClick={() => onClick2}>
            Deny
          </button>
        </ul>
      ) : type === "maintenance" ? (
        <div>
        <ul className="card maintenance">
          <label className="cardheading">{/*user.email*/}John Smith</label>
          <textarea
            id="messageID"
            type="text"
            className="cardInput"
            onChange={() => updateMessage()}
          />
          <button className="subbutton b2" onClick={() => {/*TODO: Fetch message*/ viewMessage("MESSAGE HERE")}}>
            View
          </button>
          <button className="subbutton" onClick={() => submitMessage()}>
            Reply
          </button>
        </ul>
        </div>
      ) : (
        //type === "rent"
        <ul className="card rent">
          <label className="cardheading">{/*user.email*/}John Smith</label>
          <button className="subbutton fee" onClick={() => onClick1}>
            Apply Late Fee
          </button>
        </ul>
      )}
    </div>
  );
};

export default Cards;
