import React from 'react'
import apple from '../../statics/apple.png'
import google from '../../statics/google.png'
import microsoft from '../../statics/microsoft.png'
import classes from './MobileAppsLinks.css'

export default () => {
    return (
        <div className={classes.container}>
            <div className="top">
                <p className={classes.text}>Get the app.</p>
            </div>
            <div className="bottom">
                <a href="#" target="blank"><img className={classes.mobileAppImg} src={apple} alt="apple" /></a>
                <a href="#" target="blank"><img className={classes.mobileAppImg} src={google} alt="google" /></a>
                <a href="#" target="blank"><img className={classes.mobileAppImg} src={microsoft} alt="microsoft" /></a>
            </div>
        </div>
    )
}
