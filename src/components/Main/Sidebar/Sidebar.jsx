import React from 'react';
import classes from './Sidebar.module.css';
import SideItem from './SideItem/SideItem';


const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <SideItem name='Profile' link='#s'/>
      <SideItem name='Tasks' link='#s'/>
      <SideItem name='Memories' link='#s'/>
      <SideItem name='Nodes' link='#s'/>
      <SideItem name='Setting' link='#s'/>
    </div>
  );
}

export default Sidebar;