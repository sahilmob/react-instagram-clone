import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage'
import FooterMenu from './components/FooterMenu/FooterMenu'
import Profile from './containers/Profile/Profile'
import classes from './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faUser, faCompass, faCog, faTh, faBookmark, faTv, faIdBadge } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faUser, faCompass, faCog, faTh, faBookmark, faTv, faIdBadge)

class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/profile" exact component={Profile} />
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
