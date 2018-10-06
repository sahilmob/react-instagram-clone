import React from 'react'
import classes from "./Stroy.css"

export default (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <img src={props.avatar} alt="userimage" className={classes.userAvatar} />
        <span className={classes.text}>
          <span className={classes.username}>{props.username}</span>
          <span className={classes.time}>{props.time}</span>
        </span>
      </div>
    </div>
  )
}
