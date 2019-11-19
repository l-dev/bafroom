import React from "react";
import { Route, Switch } from "react-router-dom";
import Show from "./Components/Show";
import List from "./Components/List";
import Home from "./Components/Home"
import Test from "./Components/test"
import Detail from  "./Components/Detail"
import "./App.css";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><a href="/">BATHROOM LOCATOR</a></h1>
      </header>
      <nav>
        
        <a href="/test">MAP</a>
        <a href="/">HOME</a>
      </nav>

      <div className="main">
        <Switch>
          <Route path="/test" component={Test}/>
          <Route exact path="/maps" component={Show} />
          <Route exact path="/list" component={List} />
          <Route exact path="/" component={Home} />
          <Route path ="/detail/:id" component={Detail}/>
        </Switch>
      </div>
     
    </div>
  );
}

export default App;
