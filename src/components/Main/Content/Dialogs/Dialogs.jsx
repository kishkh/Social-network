import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import MessageRoutes from './MessageRoutes/MessageRoutes';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <DialogName id={props.id} users={props.users}/>
      <MessageRoutes 
        onSendMessage={props.onSendMessage}
        onUpdateTextValue={props.onUpdateTextValue}
        messagesData={props.messagesData}
        users={props.users} 
      />
    </div>
  );
}

export default Dialogs;