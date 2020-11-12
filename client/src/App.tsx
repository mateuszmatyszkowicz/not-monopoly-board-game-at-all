import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { eventType } from "./eventTypes";
import './assets/tailwind.output.css';
import { SideMenu } from "./Areas/Menu/side-menu";
import { LandingPage } from "./Areas/Menu/landing-page";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log("Client Connected!");
    };

    client.onmessage = (message) => {
      console.log(JSON.parse(message.data.toString()));
    };
  }, []);

  var msg = {
    message: "message",
    event: {
      type: eventType.JoinBoard
    },
    date: Date.now()
  };

  // Send the msg object as a JSON-formatted string.
 

  const sendMessage = (message: string) => {
      msg.message = message;
      client.send(JSON.stringify(msg));
  }

  return (
    <div className="App">
       <LandingPage></LandingPage>
    </div>
  );
}


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <button onClick={() => sendMessage('heasj')} >Hejo</button>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

export default App;
