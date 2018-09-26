import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './PostItem.css'

export default (props) => {
  return (
    <div className={classes.container}>
        <img src={props.sourc} className={classes.img} alt=""/>
        <div className={classes.backdrop}>
            <span className={classes.stats}>
                <FontAwesomeIcon className={classes.icon} icon="heart" />
                <span className={classes.number}>{props.likes}</span>
            </span>
            <span className={classes.stats}>
                <FontAwesomeIcon className={classes.icon} icon="comment" />
                <span className={classes.number}>{props.comments}</span>
            </span>
        </div>
    </div>
  )
}
