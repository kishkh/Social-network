import React from 'react';
import { Route } from 'react-router-dom';
import Messages from './Messages/Messages';

const MessageRoutes = (props) => {
  const messageRoutes = props.messagesData.map(item => {
    return (
      <Route
        path={`/dialogs/${item.idName}`}
        render={() => (
          <Messages
            onSendMessage={props.onSendMessage}
            onUpdateTextValue={props.onUpdateTextValue}
            id={item.idName}
            textValue={item.textValue}
            messages={item.messages}
            users={props.users}
          />
        )}
      />
    )
  });

  return (
    <div>
      {messageRoutes}
    </div>

  )
}

export default MessageRoutes;