import React from 'react';
import Message from './Message/Message';
import classes from './MessageContainer.module.css';

const MessageContainer = () => {
  return (
    <div className={classes.messageContainer}>
      <Message message='Some message' />
      <Message message='Some message second' />
      <Message message='Some message third' />
      <Message message='Some message forth' />
    </div>
  );
}

export default MessageContainer;