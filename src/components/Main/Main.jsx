import React from 'react';
import classes from './Main.module.css';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Main = (props) => {
  return (
    <div className={classes.main}>
      <Sidebar friends={props.state.friends} users={props.state.users}/>
      <Content state={props.state} store={props.store} dispatch={props.dispatch} />
    </div>
  )
}

export default Main;