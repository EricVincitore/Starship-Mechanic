import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from './pages/MainMenu';
import Builder from './pages/Builder';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/builder" component={Builder} />
        </Switch>
      </div>
    </Router>
 
  );
}

export default App;
