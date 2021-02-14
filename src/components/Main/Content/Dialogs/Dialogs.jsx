import React from 'react';
import DialogContainer from './DialogContainer/DialogContainer';
import classes from './Dialogs.module.css';
import MessageContainer from './MessageContainer/MessageContainer';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <DialogContainer id={props.data.dialogsName} data={props.users}/>
      <MessageContainer data={props.data.messagesData} textValue={props.data.textValue} dispatch={props.dispatch} ava={props.users} />
    </div>
  );
}

export default Dialogs;