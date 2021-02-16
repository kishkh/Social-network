import React from 'react';
import classes from './Node.module.css';

const Node = (props) => {
  const removeNode = () => {
    props.onRemoveNode(props.id)
  }
  const favoriteNode = () => {
    props.onFavoriteNode(props.id)
  }

  return (
    <div className={props.fav ? `${classes.container} ${classes.fav}` : classes.container}>
      <div className={classes.text}>
        <div className={classes.smallContainer}>
          <span className={classes.small}>{props.id}. </span>
          <span className={classes.small}>{`${props.date.slice(0, props.date.length - 3)}`}</span>
        </div>
        <span className={classes.node}>{props.text}</span>
        <div className={classes.btnContainer}>
          <button className={classes.btnDel} onClick={removeNode} >
            <span>D</span>
          </button>
          <button className={classes.btnFav} onClick={favoriteNode} >
            <span>F</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Node;