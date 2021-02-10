import React from 'react';
import Message from './Message/Message';

const MessageContainer = (props) => {
  const messages = props.data.map(item => {
        return <Message message={item.message} id={item.idMessage} />
  });
   
  
  return (
    <div>
      { messages }
    </div>
  );
}

export default MessageContainer;