import React from 'react';
import Tasks from './Tasks';
import { connect } from 'react-redux';
import { updateTaskValueCreator, addTaskCreator } from './../../../../redux/reducers/tasks-reducer';


const mapStateToProps = (state) => {
  return {
    textValue: state.tasks.textValue,
    tasks: state.tasks.tasks
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => {
      dispatch(addTaskCreator())
    },
    updateTaskValue: (value) => {      
      dispatch(updateTaskValueCreator(value))
    }
  }
}
const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks)
export default TasksContainer;