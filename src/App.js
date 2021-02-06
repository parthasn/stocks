import logo from './logo.svg';
import './App.css';
import { CheckList } from './components/StockChecklist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CheckList/>
    </div>
  );
}

export default App;
