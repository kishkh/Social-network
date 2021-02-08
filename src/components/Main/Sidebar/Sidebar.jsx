import React from 'react';
import classes from './Sidebar.module.css';
import SideItem from './SideItem/SideItem';


const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <SideItem name='Profile' link='/profile'/>
      <SideItem name='Dialogs' link='/dialogs'/>
      <SideItem name='Tasks' link='/tasks'/>
      <SideItem name='Memories' link='/memories'/>
      <SideItem name='Nodes' link='/nodes'/>
      <SideItem name='Settings' link='/settings'/>
    </div>
  );
}

export default Sidebar;