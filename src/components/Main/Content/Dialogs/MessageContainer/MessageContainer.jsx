import React from 'react';
import { Route } from 'react-router-dom';
import Messages from './Messages/Messages';
import classes from './MessageContainer.module.css';

const MessageContainer = (props) => {
  const messages = props.data.map(item => {
    return (
      <Route 
        path={`/dialogs/${item.idName}`} 
        render={() => <Messages data={item.messages} />}
      />
    )
  });
  
  return (
    <div className={classes.messageContainer} >
      { messages }
    </div>
  )
}

export default MessageContainer;