import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import classes from './LandingPage.css'
import phoneImg from '../../statics/43cc71bb1b43.png'

export default class LandingPage extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className="left">
                    <img src={phoneImg} alt="" />
                </div>
                <div className="right">
                    <SignupForm />
                </div>
            </div>
        )
    }
}
