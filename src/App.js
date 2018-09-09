import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage/'
import FooterMenu from './components/FooterMenu/FooterMenu'
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact render={() => <div> Login </div>} />
            <Route path="/register" exact render={() => <div> Register </div>} />
          </Switch>
        </BrowserRouter>
        <FooterMenu className={classes.footerMenu} />
      </div>
    );
  }
}

export default App;
