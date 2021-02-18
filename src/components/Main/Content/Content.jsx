import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import NodesContainer from './Nodes/NodesContainer';
import Settings from './Settings/Settings';
import ProfileContainer from './Profile/ProfileContainer';
import TasksContainer from './Tasks/TasksContainer';
import MemoriesContainer from './Memories/MemoriesContainer';
const Content = (props) => {
  return (
    <div className={classes.content}>

      <Route
        path='/profile' render={() => <ProfileContainer />}
      />
      <Route
        path='/dialogs' render={() => <DialogsContainer />}
      />
      <Route
        path='/tasks' render={() => <TasksContainer />}
      />
      <Route
        path='/memories' render={() => <MemoriesContainer />}
      />
      <Route
        path='/nodes'
        render={() => <NodesContainer />}
      />
      <Route
        path='/settings' render={Settings}
      />

    </div>
  );
}
export default Content;