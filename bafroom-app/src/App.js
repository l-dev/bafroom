import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Show from "./Components/Show";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         
          <a className="links" href="/maps">
            Let's find the bathroom
          </a>
        </h1>
        <nav className="links">
          <h1><a href="" className="links">
            Map
          </a></h1>
          <h1><a href="" className="links">List of locations
          </a></h1>
         
         <h1> <a href="" className="links">
            About
          </a></h1>
        </nav>
      </header>
      <div className="main">
        <Switch>
          <Route exact path="/maps" component={Show} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
