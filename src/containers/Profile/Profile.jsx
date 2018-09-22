import React, { Component } from 'react'
import Header from '../../components/Header/Herder'
import UserInfo from '../../components/UserInfo/userInfo'
import ProfileMAinContentNav from '../../components/ProfileMainContentNav/ProfileMainContentNav'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserInfo />
        <ProfileMAinContentNav />
      </div>
    )
  }
}
