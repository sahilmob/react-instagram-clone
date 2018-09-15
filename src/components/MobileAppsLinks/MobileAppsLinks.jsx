/* eslint "jsx-a11y/href-no-hash": "off" */
import React from 'react'
import apple from '../../static/img/apple.png'
import google from '../../static/img/google.png'
import microsoft from '../../static/img/microsoft.png'
import classes from './MobileAppsLinks.css'

export default () => {
    return (
        <div className={classes.container}>
            <div className="top">
                <p className={classes.text}>Get the app.</p>
            </div>
            <div className={classes.bottom}>
                <a className={classes.mobileAppImg} href="#" target="blank"><img src={apple} alt="apple" /></a>
                <a className={classes.mobileAppImg} href="#" target="blank"><img src={google} alt="google" /></a>
                <a className={classes.mobileAppImg} href="#" target="blank"><img src={microsoft} alt="microsoft" /></a>
            </div>
        </div>
    )
}
