import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import Profile from './Profile/Profile';
import Tasks from './Tasks/Tasks';
import Memories from './Memories/Memories';
import NodesContainer from './Nodes/NodesContainer';
import Settings from './Settings/Settings';
const Content = (props) => {
  const {profile, dialogs, tasks, memories, nodes, users, friends} = props.state;
  return (
    <div className={classes.content}>

      <Route
        path='/profile' render={() => <Profile data={profile} />}
      />
      <Route
        path='/dialogs' render={() => <DialogsContainer store={props.store} />}
      />
      <Route
        path='/tasks' render={() => <Tasks data={tasks} dispatch={props.dispatch}/>}
      />
      <Route
        path='/memories' render={() => <Memories data={memories} dispatch={props.dispatch}/>} 
      />
      <Route 
        path='/nodes' 
        render={() => <NodesContainer store={props.store} />} 
      />
      <Route 
        path='/settings' render={Settings} 
      />

    </div>
  );
}

export default Content;