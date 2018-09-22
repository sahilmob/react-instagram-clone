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
        <button className={calsses.editProfileBtn}>Edit Profile</button>
        <FontAwesomeIcon className={calsses.settingIcon} icon="cog"/>
      </div>
      <div className={calsses.center}>
        <div className={calsses.stat}>
        <span className={calsses.number}>15</span>
        <span className={calsses.text}>posts</span>
        </div>
        <div className={calsses.stat}>
        <span className={calsses.number}>285</span>
        <span className={calsses.text}>followers</span>
        </div>
        <div className={calsses.stat}>
        <span className={calsses.number}>633</span>
        <span className={calsses.text}>following</span>
        </div>
      </div>
      <div className={calsses.bottom}>
      Jhon Doe
      </div>
      </div>
    </div>
  )
}
