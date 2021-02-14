import React from 'react';
import classes from './Node.module.css';
import { removeNodeCreator, favoriteNodeCreator} from '../../../../../../redux/reducers/nodes-reducer';
const Node = (props) => {
  const deleteNode = () => {
    props.dispatch(removeNodeCreator(props.id))
  }
  const favoriteNode = () => {

    props.dispatch(favoriteNodeCreator(props.id))
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
          <button className={classes.btnDel} onClick={deleteNode} >
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