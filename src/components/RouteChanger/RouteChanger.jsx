import React from 'react'
import { Link } from 'react-router-dom'
import classes from './RouteChanger.css'
export default (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.content}>{props.msg} <Link to={props.pathLink}>{props.pathText}</Link></p>
        </div>
    )
}
