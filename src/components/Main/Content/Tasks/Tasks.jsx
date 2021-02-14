import React from 'react';
import classes from './Tasks.module.css';
import MyTasks from './MyTasks/MyTasks';
import AddTask from './AddTask/AddTask';

const Tasks = (props) => {
  return (
    <div className={classes.container}>
      <AddTask dispatch={props.dispatch}/>
      <MyTasks 
        data={props.data.tasks}
        dispatch={props.dispatch}/>
    </div>
  );
}

export default Tasks;