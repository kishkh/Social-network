import React from 'react';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
  const messages = props.data.map(item => {
    const ava = props.ava.filter(ava => ava.id === item.idUser)
        return <Message 
          ava={ava[0]}
          message={item.message} 
          id={item.idUser} />
  });
   
  
  return (
    <div className={classes.container}>
      { messages }
    </div>
  );
}

export default Messages;