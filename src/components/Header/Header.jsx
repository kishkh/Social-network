import React from 'react';
import classes from './Header.module.css';
import Icon from './Icon/Icon';
import Menu from './Menu/Menu';
import Title from './Title/Title';


const Header = () => {
  return (
    <header className={classes.header}>
      <Icon />
      <Title />
      <Menu />
    </header>
  );
}

export default Header;