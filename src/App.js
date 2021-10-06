
import { default as Login } from './Components/Login/index';
import './App.css';

function App() {

  const onLogin = () => {
    alert("register: ")
  }
  const onRegister = () => {
    alert("register: ")
  }

  return (
    <div className="App">
      <Login onLogin={onLogin} onRegister={onRegister} />
    </div>
  );
}

export default App;
