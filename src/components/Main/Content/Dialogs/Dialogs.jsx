import React from 'react';
import DialogContainer from './DialogContainer/DialogContainer';
import classes from './Dialogs.module.css';
import MessageContainer from './MessageContainer/MessageContainer';

const Dialogs = (props) => {
  console.log(props.data.dialogName);
  return (
    <div className={classes.dialogs}>
      <DialogContainer data={props.data.dialogName}/>
      <MessageContainer data={props.data.messagesData} />
    </div>
  );
}

export default Dialogs;