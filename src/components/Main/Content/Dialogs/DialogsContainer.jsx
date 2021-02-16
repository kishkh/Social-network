import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateTextValueCreator } from './../../../../redux/reducers/dialogs-reducer'

const DialogsContainer = (props) => {
  const dialogs = props.store.getState().dialogs
  const users = props.store.getState().users

  const onSendMessage = (id) => {
    props.store.dispatch(sendMessageCreator(id));
  }
  const onUpdateTextValue = (text, id) => {
    props.store.dispatch(updateTextValueCreator(text, id))
  }

  return (
    <Dialogs
      id={dialogs.dialogsName}
      users={users}
      onSendMessage={onSendMessage}
      onUpdateTextValue={onUpdateTextValue}
      messagesData={dialogs.messagesData}
    />
  );
}

export default DialogsContainer;
