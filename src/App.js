import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage/'
import FooterMenu from './components/FooterMenu/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact render={() => <div> Login </div>} />
            <Route path="/register" exact render={() => <div> Register </div>} />
          </Switch>
        </BrowserRouter>
        <FooterMenu />
      </div>
    );
  }
}

export default App;
