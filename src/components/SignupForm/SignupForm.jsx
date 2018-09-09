import React, { Component } from 'react'
import Input from '../UI/Input/Input'
import classes from './SignupForm.css'
import igLogo from '../../statics/instagram.svg'

export default class SignupForm extends Component {
    changeHandler = (event) => {
        var label = event.target.previousSibling
        label.style.fontSize = "8px";
        label.style.top = "1px";
    }
    blurHandler = (event) => {
        if (event.target.value === '') {
            var label = event.target.previousSibling
            label.style.fontSize = "12px";
            label.style.top = "9px";
        }
    }
    render() {
        return (
            <div className={classes.container}>
                <img src={igLogo} alt="logo" className={classes.logo} />
                <h2 className={classes.headLine}>Sign up to see photos and videos from your friends.</h2>
                <button className={classes.btn}>Log in with Facebook</button>
                <span className={classes.or}>or</span>
                <Input inputType="text" labelText="Mobile Number or Email" nameText="number_or_email" changed={this.changeHandler} id="number_or_email" blur={this.blurHandler} />
                <Input inputType="text" labelText="Full Name" nameText="name" changed={this.changeHandler} id="name" blur={this.blurHandler} />
                <Input inputType="text" labelText="Username" nameText="username" changed={this.changeHandler} id="username" blur={this.blurHandler} />
                <Input inputType="password" labelText="Password" nameText="password" changed={this.changeHandler} id="password" blur={this.blurHandler} />
                <button className={classes.btn}>Sign up</button>
                <span className={classes.agreeMsg}>By signing up, you agree to our <strong>Terms, Data Policy</strong> and <strong>Cookies Policy.</strong></span>
            </div>
        )
    }
}
