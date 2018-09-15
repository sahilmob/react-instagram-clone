import React from 'react'
import classes from './Input.css'

export default (props) => {
    return (
        <div className={classes.container}>
            <label htmlFor={props.id}>{props.labelText}</label>
            <input className={classes.input} type={props.inputType} name={props.nameText} onChange={props.changed} id={props.id} value={props.inputValue}/>
        </div>
    )
}
