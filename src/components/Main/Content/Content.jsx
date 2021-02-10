import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import Tasks from './Tasks/Tasks';
import Memories from './Memories/Memories';
import Nodes from './Nodes/Nodes';
import Settings from './Settings/Settings';
const Content = (props) => {
  return (
    <div className={classes.content}>
      
      <Route path='/profile' render={() => <Profile data={props.data.profile}/>} />
      <Route path='/dialogs' render={() => <Dialogs data={props.data.dialogs}/>} />
      <Route path='/tasks' render={() => <Tasks data={props.data.tasks}/>} />
      <Route path='/memories' render={() => <Memories data={props.data.memories}/>} />
      <Route path='/nodes' render={() => <Nodes data={props.data.nodes}/>} />
      <Route path='/settings' render={ Settings } />
      
    </div>
  );
}

export default Content;