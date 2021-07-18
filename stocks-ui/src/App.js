import logo from './logo.svg';
import './App.css';
import {hostname, port} from './constants/resource.js'
import Test from './Test';





function App() {
  console.log("Test : "+ hostname);
  console.log("Test : "+ port);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test className="App-link"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
