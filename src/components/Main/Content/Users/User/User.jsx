import React from 'react';
import classes from './User.module.css';

const User = (props) => {
  const changeFollow = () => {
    
    props.changeFollow(props.id)
    
  }
  
  return (
    <div className={classes.item}>
      <img src={props.ava} alt="ava"/>
      <button onClick={changeFollow} className={props.followed ? classes.del : classes.add}> 
        {props.followed ? <span>Unfollow</span> : <span>Follow</span>}
      </button>
      <div className={classes.text}>
        <span className={classes.span}>{props.name}</span>
        <span className={classes.span}>{props.country}, {props.city}</span>
      </div>
    </div>
  )
}

export default User