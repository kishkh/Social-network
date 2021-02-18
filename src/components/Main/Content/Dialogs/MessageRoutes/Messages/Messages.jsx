import React from 'react';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
  const messages = props.messages.map(item => {
    const ava = props.users.filter(ava => ava.id === item.idUser)
    return (
      <Message
        key={item.idMessage}
        ava={ava[0]} message={item.message}
        id={item.idUser} idMessage={item.idMessage}
      />
    )
  });

  const updateTextValue = (e) => {
    props.onUpdateTextValue(e.target.value, props.id)
  }
  const sendMessage = () => {
    props.onSendMessage(props.id)
  }

  return (
    <div className={classes.container}>
      <div className={classes.messageContainer}>
        {messages}
      </div>
      <div className={classes.textarea}>
        <textarea
          onChange={updateTextValue}
          value={props.textValue}
          className={classes.text}
        />
        <button   
          onClick={sendMessage} 
          className={classes.btn}
        >+</button>
      </div>
    </div>
  );
}

export default Messages;