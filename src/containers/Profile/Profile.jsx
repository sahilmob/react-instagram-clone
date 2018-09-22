import React, { Component } from 'react'
import Header from '../../components/Header/Herder'
import UserInfo from '../../components/UserInfo/userInfo'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserInfo />
      </div>
    )
  }
}
