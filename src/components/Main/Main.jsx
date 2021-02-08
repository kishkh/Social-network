import React from 'react';
import classes from './Main.module.css';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
  return (
    <div className={classes.main}>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Main;