import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    {/* <App signal="Red" />
    
    <App signal="Green" color="green" visible={true}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
