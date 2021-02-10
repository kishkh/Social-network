import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './DialogContainer.module.css';

const DialogContainer = (props) => {
  const dialogs =  props.data.map( item => {
  return <Dialog dialogName={item.name} id={item.id} />
  })
  console.log(dialogs);
  return (
    <div className={classes.dialogContainer}>
      { dialogs }
    </div>
  );
}

export default DialogContainer;