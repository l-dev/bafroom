import React from "react";
import { Route, Switch } from "react-router-dom";
import Show from "./Components/Show";
import List from "./Components/List";
import About from "./Components/About";
import Home from "./Components/Home"
import Create from "./Components/Create"
import Test from "./Components/test"
import "./App.css";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><a href="/">BATHROOM LOCATOR</a></h1>
      </header>
      <nav>
        <a href="/test">MAP</a>
        <a href="/list">LIST</a> <a href="/create">ADD REVIEW</a>
        <a href="/about">ABOUT</a>
      </nav>

      <div className="main">
        <Switch>
          <Route path="/test" component={Test}/>
          <Route exact path="/maps" component={Show} />
          <Route exact path="/list" component={List} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
