import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import calsses from './UserInfo.css'
import userImg from '../../static/img/user.jpg'
export default () => {
  return (
    <div className={calsses.container}>
      <div className={calsses.left}>
        <img src={userImg} className={calsses.userImg} alt="user"/>
      </div>
      <div className={calsses.middle}>
      <div className={calsses.top}>
        <span className={calsses.username}>JhonDoe</span>
        <button>Edit Profile</button>
        <FontAwesomeIcon icon="cog"/>
      </div>
      </div>
    </div>
  )
}
