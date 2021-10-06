
import { default as Login } from './Components/Login/index';
import './App.css';

function App() {

  const onLogin = (email, password) => {
    alert("login " + email + " " + password)
  }
  const onRegister = (email, password) => {
    alert("register " + email + " " + password)
  }

  return (
    <div className="App">
      <Login onLogin={onLogin} onRegister={onRegister} />
    </div>
  );
}

export default App;
