import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateTextValueCreator } from './../../../../redux/reducers/dialogs-reducer'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    id: state.dialogs.dialogsName,
    users: state.users,
    messagesData: state.dialogs.messagesData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage:  (id) => {
      dispatch(sendMessageCreator(id));
    },
    onUpdateTextValue: (text, id) => {
      dispatch(updateTextValueCreator(text, id))
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
