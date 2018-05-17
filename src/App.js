import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from react-router-dom'
import Cats from ./pages/Cats
import NewCat from ./pages/NewCat
import Header from ./components/Header

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/cats" component={Cats} />
            <Route exact path="/" component={NewCat} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
