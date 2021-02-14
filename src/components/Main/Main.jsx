import React from 'react';
import classes from './Main.module.css';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Main = (props) => {
  return (
    <div className={classes.main}>
      <Sidebar friends={props.store.friends} users={props.store.users}/>
      <Content store={props.store} dispatch={props.dispatch} />
    </div>
  )
}

export default Main;