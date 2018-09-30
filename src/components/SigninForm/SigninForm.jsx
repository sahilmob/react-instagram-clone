import React, { Component } from "react";
import Input from "../UI/Input/Input";
import classes from "./SigninForm.css";
import igLogo from "../../static/img/instagram.svg";
import axios from "axios";
import { withRouter } from "react-router";

class SigninForm extends Component {
	state = {
		username: "",
		password: "",
		error: null
	};
	changeHandler = event => {
		var label = event.target.previousSibling;
		if (event.target.value === "") {
			label.style.fontSize = "12px";
			label.style.top = "16px";
			this.setState({
				[event.target.name]: event.target.value
			});
		} else {
			label.style.fontSize = "10px";
			label.style.top = "6px";
			this.setState({
				[event.target.name]: event.target.value
			});
		}
	};

	clickHandler = () => {
		this.setState({
			error: null
		});
		let { username, password } = this.state;
		axios
			.post("https://react-instagram-nodejs-api.herokuapp.com/login", {
				username,
				password
			})
			.then(res => {
				const { history } = this.props;
				history.push({
					pathname: "/profile",
					state: { images: res.data }
				});
			})
			.catch(({ response: { data: { message } } }) => {
				this.setState({
					error: message
				});
			});
	};
	render() {
		var fbBtnClasses = [classes.btn, classes.signUpwithFB];
		var signUpBtnClasses = [classes.btn, classes.signUpBtn];
		return (
			<div className={classes.container}>
				<img src={igLogo} alt="logo" className={classes.logo} />
				<h2 className={classes.headLine}>
					Sign up to see photos and videos from your friends.
				</h2>
				<button className={fbBtnClasses.join(" ")}>Log in with Facebook</button>
				<span className={classes.or}>or</span>
				<Input
					inputValue={this.state.username}
					inputType="text"
					labelText="Username"
					nameText="username"
					changed={this.changeHandler}
					id="username"
					blur={this.blurHandler}
				/>
				<Input
					inputValue={this.state.password}
					inputType="password"
					labelText="Password"
					nameText="password"
					changed={this.changeHandler}
					id="password"
				/>
				<button
					className={signUpBtnClasses.join(" ")}
					onClick={this.clickHandler}
				>
					Sign in
				</button>
				{this.state.error ? (
					<h5 className={classes.errMsg}>{this.state.error}</h5>
				) : null}
			</div>
		);
	}
}

export default withRouter(SigninForm);
