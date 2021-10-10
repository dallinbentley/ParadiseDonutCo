import React from "react";
import "./App.css";
import Donuts from "./components/donuts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='display-1'>Paradise Donut Company</h1>
      </header>
      <Donuts />
    </div>
  );
}

export default App;
