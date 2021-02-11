import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  if (props.id === 0) {
    return (
      <div className={`${classes.message} ${classes.my}`}>
        <div >
          <img className={classes.ava} src={props.ava.ava} alt="ava"/>
        </div>
        <span>{props.id}: {props.message}</span>
      </div>
    );
  } else {
    return (
      <div className={`${classes.message} ${classes.opponent}`}>
        
        <span>{props.id}: {props.message}</span>
        <div >
          <img className={classes.ava} src={props.ava.ava} alt="ava"/>
        </div>
      </div>
    );
  }
}

export default Message;