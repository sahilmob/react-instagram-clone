import React, { Component } from "react";
import SigninForm from "../../components/SigninForm/SigninForm";
import RouteChanger from "../../components/RouteChanger/RouteChanger";
import MobileAppsLinks from "../../components/MobileAppsLinks/MobileAppsLinks";
import classes from "./Signin.css";

export default class LandingPage extends Component {
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.center}>
					<SigninForm />
					<RouteChanger
						msg="Have an account?"
						pathLink="/login"
						pathText="Log in"
					/>
					<MobileAppsLinks />
				</div>
			</div>
		);
	}
}
