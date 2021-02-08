import React from 'react';
import classes from './Icon.module.css';

const Icon = () => {
  return (
    <div className={classes.container}>
      <img className={classes.ico} src='https://img2.freepng.ru/20180315/vrq/kisspng-logo-lion-shutterstock-red-gradient-lionhead-5aab05d93512d0.9761940315211575932174.jpg' alt='logo' />
    </div>
  );
}

export default Icon;