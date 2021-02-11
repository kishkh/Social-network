import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './DialogContainer.module.css';

const DialogContainer = (props) => {
  const dialogs =  props.id.map( item => {
    const userA = props.data.filter(user => {
      return user.id === item.id;
      })
    const [user] = userA;
    return <Dialog name={user.name} id={user.id} ava={user.ava} />
  })

  return (
    <div className={classes.dialogContainer}>
      { dialogs }
    </div>
  );
}

export default DialogContainer;