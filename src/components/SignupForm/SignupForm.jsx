import React, { Component } from 'react'
import Input from '../UI/Input/Input'
import classes from './SignupForm.css'
import igLogo from '../../static/img/instagram.svg'

export default class SignupForm extends Component {
    state = {
        number_or_email: '',
        name: '',
        username: '',
        password: ''
    }
    changeHandler = (event) => {
        var label = event.target.previousSibling
        console.log(label)
        if (event.target.value === '') {
            label.style.fontSize = "12px";
            label.style.top = "16px";
            this.setState({
                [event.target.name]: event.target.value
            })
        } else {
            label.style.fontSize = "10px";
            label.style.top = "6px";
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render() {
        var fbBtnClasses = [classes.btn, classes.signUpwithFB]
        var signUpBtnClasses = [classes.btn, classes.signUpBtn]
        return (
            <div className={classes.container}>
                <img src={igLogo} alt="logo" className={classes.logo} />
                <h2 className={classes.headLine}>Sign up to see photos and videos from your friends.</h2>
                <button className={fbBtnClasses.join(" ")}>Log in with Facebook</button>
                <span className={classes.or}>or</span>
                <Input inputValue={this.state.number_or_email} inputType="text" labelText="Mobile Number or Email" nameText="number_or_email" changed={this.changeHandler} id="number_or_email" blur={this.blurHandler} />
                <Input inputValue={this.state.name} inputType="text" labelText="Full Name" nameText="name" changed={this.changeHandler} id="name" blur={this.blurHandler} />
                <Input inputValue={this.state.username} inputType="text" labelText="Username" nameText="username" changed={this.changeHandler} id="username" blur={this.blurHandler} />
                <Input inputValue={this.state.password} inputType="password" labelText="Password" nameText="password" changed={this.changeHandler} id="password" />
                <button className={signUpBtnClasses.join(" ")}>Sign up</button>
                <span className={classes.agreeMsg}>By signing up, you agree to our <strong>Terms, Data Policy</strong> and <strong>Cookies Policy.</strong></span>

            </div>
        )
    }
}
