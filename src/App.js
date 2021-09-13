import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        {
          props.visible==true && 
          <img src={logo} className="App-logo" alt="logo" />
          }
        <p style={{ color: props.color }}>
          {props.signal}
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
