import React, { Component } from 'react'
import phoneImg from '../../statics/43cc71bb1b43.png'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="left">
                    <img src={phoneImg} alt="" />
                </div>
                <div className="right">
                    right
                </div>
            </div>
        )
    }
}
