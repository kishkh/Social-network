import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideItem.module.css';

const SideItem = (props) => {
  return (
    <div className={classes.item}>
      <NavLink to={props.link} activeClassName={classes.active} >{props.name}</NavLink>
    </div>
  )
}

export default SideItem;
