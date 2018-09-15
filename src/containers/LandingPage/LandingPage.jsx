import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import RouteChanger from '../../components/RouteChanger/RouteChanger'
import MobileAppsLinks from '../../components/MobileAppsLinks/MobileAppsLinks'
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup'
import classes from './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className="left">
                    <PhoneMockup />
                </div>
                <div className={classes.right}>
                    <SignupForm />
                    <RouteChanger msg="Have an account?" pathLink="/login" pathText="Log in" />
                    <MobileAppsLinks />
                </div>
            </div>
        )
    }
}
