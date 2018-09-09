import React from 'react'
import classes from './FooterMenuListItem.css'

export default (props) => {
    return (
        <li className={classes.footerMenuListItem}>
            {props.text}
        </li>
    )
}
