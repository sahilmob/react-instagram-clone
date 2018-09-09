import React from 'react'
import FooterMenuListItem from '../FooterMenuListItem/FooterMenuListItem'
import classes from './FooterMenu.css'

export default () => {
    return (
        <div className={classes.container}>
            <ul className={classes.footerMenu}>
                <FooterMenuListItem text="about us" />
                <FooterMenuListItem text="support" />
                <FooterMenuListItem text="press" />
                <FooterMenuListItem text="api" />
                <FooterMenuListItem text="jobs" />
                <FooterMenuListItem text="privacy" />
                <FooterMenuListItem text="terms" />
                <FooterMenuListItem text="profile" />
                <FooterMenuListItem text="language" />
            </ul>
            <span className={classes.copyrightText}>© 2018 INSTAGRAM</span>
        </div>
    )
}
