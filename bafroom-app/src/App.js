import React from "react";
import { Route, Switch } from "react-router-dom";
import Show from "./Components/Show";
import List from "./Components/List";
import About from "./Components/About";
import Home from "./Components/Home"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><a href="/">BATHROOM LOCATOR</a></h1>
      </header>
      <nav>
        <a href="/maps">Map</a>
        <a href="/list">List of locations</a> <a href="/about">About</a>
        <a href="">Something</a>
      </nav>

      <div className="main">
        <Switch>
          <Route exact path="/maps" component={Show} />
          <Route exact path="/list" component={List} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
