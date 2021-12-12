// import logo from './logo.svg';
import './App.css';
import StockDetails from './components/StockDetails'
// import Test from './Test';
// import { AddStock } from './components/AddStock';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test className="App-link"/>
        <AddStock />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <StockDetails/>
    </div>
  );
}

export default App;
