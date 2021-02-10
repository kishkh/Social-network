import React from 'react';
import classes from './Main.module.css';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Main = (props) => {
  return (
    <div className={classes.main}>
      <Sidebar />
      <Content data={props.data}/>
    </div>
  )
}

export default Main;