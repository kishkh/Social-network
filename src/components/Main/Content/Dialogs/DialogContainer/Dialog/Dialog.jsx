import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>
       <div className={classes.item}>
        <img src={props.ava} alt='ava'></img>
        <span>{props.name}</span>
       </div>
       
      </NavLink> 
    </div>
  );
}

export default Dialog;