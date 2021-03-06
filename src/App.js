import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import Profile from "./containers/Profile/Profile";
import Signin from "./containers/Signin/Signin";
import classes from "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faHeart,
	faUser,
	faCompass,
	faCog,
	faTh,
	faBookmark,
	faTv,
	faIdBadge,
	faSearch,
	faComment,
	faUpload
} from "@fortawesome/free-solid-svg-icons";
import Feed from "./containers/Feed/Feed";

library.add(
	faHeart,
	faUser,
	faCompass,
	faCog,
	faTh,
	faBookmark,
	faTv,
	faIdBadge,
	faSearch,
	faComment,
	faUpload
);

class App extends Component {
	render() {
		return (
			<div className={classes.app}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={LandingPage} />
						<Route path="/profile" exact component={Profile} />
						<Route path="/feed" exact component={Feed} />
						<Route path="/login" exact component={Signin} />
						<Route
							path="/register"
							exact
							render={() => <div> Register </div>}
						/>
					</Switch>
				</BrowserRouter>
				<FooterMenu className={classes.footerMenu} />
			</div>
		);
	}
}

export default App;
