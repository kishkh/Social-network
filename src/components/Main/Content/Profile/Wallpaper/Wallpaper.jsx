import React from 'react';
import classes from './Wallpaper.module.css';

const Wallpaper = (props) => {
  return (
    <div>
      <img className={classes.content_img} src={props.wallpaper} alt='wallpaper' />
    </div>
  );
}

export default Wallpaper;