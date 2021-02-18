import React from 'react';
import classes from './Stats.module.css';

const Stats = (props) => {
  const favNodes = props.nodes.filter( node => node.favorite).length
  return (
    <div className={classes.container} >
      <div className={classes.statPlace}>
        <div className={classes.title}>Stats:</div>
        <div>{`Tasks: ${props.tasks.length}`}</div>
        <div>{`Done/Failed: 0`}</div>
        <div>{`Memories: ${props.memories.length}`}</div>
        <div>{`Nodes: ${props.nodes.length}`}</div>
        <div>{`Favorite nodes: ${favNodes}`}</div>
      </div>
    </div>
  );
}

export default Stats;