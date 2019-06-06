import React from 'react';
import logo from './logo.svg';
import './App.css';
import { get } from 'https';

function App() {
  window.onload = function () {
    var myDate = setInterval(clockTime, 1000);
    function clockTime() {
      var d = new Date();
      document.getElementById('dt').innerHTML = d.toLocaleTimeString();
    }
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>The current time is: <span id="dt"></span></p>
    </div>
  );
}
export default App;
