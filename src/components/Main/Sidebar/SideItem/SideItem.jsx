import React from 'react';
import classes from './SideItem.module.css';

const SideItem = (props) => {
  return (
    <div className={classes.item}>
      <a href={props.link}>{props.name}</a>
    </div>
  )
}

export default SideItem;
