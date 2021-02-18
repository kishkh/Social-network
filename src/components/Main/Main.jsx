import React from 'react';
import classes from './Main.module.css';
import Content from './Content/Content';
import SidebarContainer from './Sidebar/SidebarContainer';

const Main = () => {
  return (
    <div className={classes.main}>
      <SidebarContainer />
      <Content />
    </div>
  )
}

export default Main;