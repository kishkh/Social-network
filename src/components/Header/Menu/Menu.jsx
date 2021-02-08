import React from 'react';
import classes from './Menu.module.css';

const Menu = () => {
  return (
    <div className={classes.container}>
      <div>
        <button className={classes.btn}>Sign in</button>
      </div>
      <div>
        <button className={classes.btn}>Sign out</button>
      </div>
    </div>
  );
}

export default Menu;