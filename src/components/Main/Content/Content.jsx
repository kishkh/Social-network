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
  const {profile, dialogs, tasks, memories, nodes, users, friends} = props.store;
  return (
    <div className={classes.content}>

      <Route
        path='/profile' render={() => <Profile data={profile} />}
      />
      <Route
        path='/dialogs' render={() => <Dialogs users={users} data={dialogs} dispatch={props.dispatch} />}
      />
      <Route
        path='/tasks' render={() => <Tasks data={tasks} />}
      />
      <Route
        path='/memories' render={() => <Memories data={memories} />} 
      />
      <Route 
        path='/nodes' 
        render={() => <Nodes data={nodes} dispatch={props.dispatch} />} 
      />
      <Route 
        path='/settings' render={Settings} 
      />

    </div>
  );
}

export default Content;