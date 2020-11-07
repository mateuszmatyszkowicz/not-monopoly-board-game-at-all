import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log("Client Connected!");
    };

    client.onmessage = (message) => {
      console.log(message.data);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
