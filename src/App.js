import logo from './logo.svg';
import './App.css';
import text from './data/text1';
import Reader from './components/Reader';

console.log(text)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reader text={text}></Reader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
