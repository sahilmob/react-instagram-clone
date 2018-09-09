import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage/'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact render={() => <div> Login </div>} />
          <Route path="/register" exact render={() => <div> Register </div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
