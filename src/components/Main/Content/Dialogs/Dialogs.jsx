import React from 'react';
import DialogContainer from './DialogContainer/DialogContainer';
import classes from './Dialogs.module.css';
import MessageContainer from './MessageContainer/MessageContainer';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <DialogContainer />
      <MessageContainer />
    </div>
  );
}

export default Dialogs;