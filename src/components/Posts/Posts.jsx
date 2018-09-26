import React, { Component } from 'react'
import classes from './Posts.css'
import PostItem from '../PostItem/PostItem'
import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'
import img4 from '../../static/img/4.jpg'
import img5 from '../../static/img/5.jpg'
import img6 from '../../static/img/6.jpg'
export default class Posts extends Component {
  render() {
    return (
      <div className={classes.container} {...this.props}>
      <PostItem sourc={img1} likes="32" comments="15"/>
      <PostItem sourc={img2} likes="32" comments="15"/>
      <PostItem sourc={img3} likes="32" comments="15"/>
      <PostItem sourc={img4} likes="32" comments="15"/>
      <PostItem sourc={img5} likes="32" comments="15"/>
      <PostItem sourc={img6} likes="32" comments="15"/>
      </div>
    )
  }
}
