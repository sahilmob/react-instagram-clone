import React from 'react'
import classes from './ProfileMainContentNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <div className={classes.container}>
      <div className={classes.navItemActive}>
        <FontAwesomeIcon className={classes.navItemIcon} icon="th" />
        <span className={classes.navItemText}>posts</span>
      </div>
      <div className={classes.navItem}>
        <FontAwesomeIcon className={classes.navItemIcon} icon="tv" />
        <span className={classes.navItemText}>igtv</span>
      </div>
      <div className={classes.navItem}>
        <FontAwesomeIcon className={classes.navItemIcon} icon="bookmark" />
        <span className={classes.navItemText}>saved</span>
      </div>
      <div className={classes.navItem}>
        <FontAwesomeIcon className={classes.navItemIcon} icon="id-badge" />
        <span className={classes.navItemText}>taged</span>
      </div>
    </div>
  )
}
