import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './SearchInput.css'

export default class SearchInput extends Component {
  state={
    searchInput: ""
  }

  onFocusHandler = (event) =>{
    event.target.style.textAlign = "left"
    var normalStateContainer = document.getElementById('normalStateContainer')
    var onFocusIcon = document.getElementById('onFocusIcon')
    onFocusIcon.style.opacity = "1"
    normalStateContainer.style.opacity = "0"
    event.target.placeholder = 'Search'
  }

  onBlurHandler = (event) =>{
    var normalStateContainer = document.getElementById('normalStateContainer')
    var onFocusIcon = document.getElementById('onFocusIcon')
    if (this.state.searchInput === ""){
      normalStateContainer.style.opacity = "1"
      event.target.placeholder = ""
      onFocusIcon.style.opacity = "0"
    }else{
      normalStateContainer.style.opacity = "0"
      event.target.style.textAlign = "center"
    }
  }
  onChangeHandler = (event) =>{
    this.setState({
      searchInput: event.target.value
    })

  }

  render() {
    return (
      <div className={classes.container}>
        <input type="text" className={classes.searchInput} value={this.state.searchInput} onFocus={this.onFocusHandler} onChange={this.onChangeHandler} onBlur={this.onBlurHandler}/>
        <div className={classes.normalStateContainer} id="normalStateContainer"> 
        <FontAwesomeIcon icon="search"/>
        <span>Search</span>
        </div>
        <FontAwesomeIcon className={classes.onFocusIcon} id="onFocusIcon" icon="search"/>
      </div>
    )
  }
}
