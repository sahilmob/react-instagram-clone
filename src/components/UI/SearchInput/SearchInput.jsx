import React, { Component } from 'react'
import classes from './SearchInput.css'
export default class SearchInput extends Component {
  render() {
    return (
      <div className={classes.container}>
        <input type="text" className={classes.searchInput}/>
      </div>
    )
  }
}
