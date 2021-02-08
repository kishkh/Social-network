import React from 'react';
import classes from './Main.module.css';
import Profile from './Content/Profile/Profile';
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
  return (
    <div className={classes.main}>
      <Sidebar />
      <Profile />
    </div>
  )
}

export default Main;