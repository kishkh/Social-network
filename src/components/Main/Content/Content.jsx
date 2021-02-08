import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import Tasks from './Tasks/Tasks';
import Memories from './Memories/Memories';
import Nodes from './Nodes/Nodes';
import Settings from './Settings/Settings';
const Content = () => {
  return (
    <div className={classes.content}>
      
      <Route path='/profile' component={Profile} />
      <Route path='/dialogs' component={Dialogs} />
      <Route path='/tasks' component={Tasks} />
      <Route path='/memories' component={Memories} />
      <Route path='/nodes' component={Nodes} />
      <Route path='/settings' component={Settings} />
      
    </div>
  );
}

export default Content;