
import './style.css';
import { useState } from 'react';

const Register = ({ onRegister, onBack }) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const updateEmail = () => {
    setEmail(document.getElementById("emailID").value);
  }

  const updatePassword = () => {
    setPassword(document.getElementById("passwordID").value);
  }

    return (
      <div className="register">
        <span className="heading">MadRentals<br/></span>
        <span className="label">email</span>
        <input id="emailID" type="text" className="input" onChange={updateEmail} />
        <span className="label">password</span>
        <input id="passwordID" type="text" className="input" onChange={updatePassword} />
        <button className="button" onClick={() => onRegister(email, password)}>Register</button>
        <button className="button" onClick={() => onBack()}>Back</button>
      </div>
    );
  }
  
  export default Register;