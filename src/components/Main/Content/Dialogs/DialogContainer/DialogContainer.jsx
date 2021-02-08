import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './DialogContainer.module.css';

const DialogContainer = () => {
  return (
    <div className={classes.dialogContainer}>
      <Dialog dialogName='Sasha' id='1' />
      <Dialog dialogName='Dasha' id='2' />
      <Dialog dialogName='Masha' id='3' />
      <Dialog dialogName='Washa' id='4' />
      <Dialog dialogName='Tasha' id='5' />
    </div>
  );
}

export default DialogContainer;