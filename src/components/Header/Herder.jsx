import React from 'react'
import SearchInput from '../UI/SearchInput/SearchInput'
import instagramLogo from '../../static/img/instagram-logo.png'
import logo from '../../static/img/instagram.svg'
import classes from './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <div className={classes.container}> 
        <div className={classes.right}>

          <img src={instagramLogo} className={classes.instagramLogo} alt="instagram"/>
          <span className={classes.divider}></span>
        <img src={logo} className={classes.logo} alt="instagram"/>
        </div>
        <div className={classes.middle}>
        <SearchInput />
        </div>
        <div className={classes.left}>
          <FontAwesomeIcon className={classes.icon} icon="compass" />
          <FontAwesomeIcon className={classes.icon}  icon="heart" />
          <FontAwesomeIcon className={classes.icon}  icon="user" />
        </div>
    </div>
  )
}
