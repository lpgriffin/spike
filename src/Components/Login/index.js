
import './style.css';

const Login = () => {
  
    return (
      <div className="login">
        <span className="heading">SPIKE<br/></span>
        <span className="label">email</span>
        <input className="email" />
        <span className="label">password</span>
        <input className="password" />
        <button className="button" >register</button>
        <button className="button" >login</button>
      </div>
    );
  }
  
  export default Login;