import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <div> Index </div>} />
          <Route path="/login" exact render={() => <div> Login </div>} />
          <Route path="/register" exact render={() => <div> Register </div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
