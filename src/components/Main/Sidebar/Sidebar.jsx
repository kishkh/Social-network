import React from 'react';
import Friends from './Friends/Friends';
import classes from './Sidebar.module.css';
import SideItem from './SideItem/SideItem';

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <SideItem name='Profile' link='/profile' />
      <SideItem name='Dialogs' link='/dialogs' />
      <SideItem name='Tasks' link='/tasks' />
      <SideItem name='Memories' link='/memories' />
      <SideItem name='Nodes' link='/nodes' />
      <SideItem name='Settings' link='/settings' />
      <Friends users={props.users} friends={props.friends} />
    </div>
  );
}

export default Sidebar;