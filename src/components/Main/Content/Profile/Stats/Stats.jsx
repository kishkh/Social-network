import React from 'react';
import classes from './Stats.module.css';

const Stats = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.statPlace}>
        <div className={classes.title}>Stats:</div>
        <div>{`Tasks: ${props.tasksCount}`}</div>
        <div>{`Done/Failed: ${props.tasksDone}/${props.tasksFail}`}</div>
        <div>{`Memories: ${props.memoriesCount}`}</div>
        <div>{`Nodes: ${props.nodesCount}`}</div>
      </div>
    </div>
  );
}

export default Stats;