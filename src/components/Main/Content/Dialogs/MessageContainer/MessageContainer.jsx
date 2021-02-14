import React from 'react';
import { Route } from 'react-router-dom';
import Messages from './Messages/Messages';
import classes from './MessageContainer.module.css';
import {addMessageCreator, changeTextValueCreator} from './../../../../../redux/reducers/dialogs-reducer';


const MessageContainer = (props) => {
  const messages = props.data.map(item => {
    return (
      <Route 
        path={`/dialogs/${item.idName}`} 
        render={() => <Messages data={item.messages} ava={props.ava} />}
      />
    )
  });
  
  const textElement = React.createRef();
  const read = () => {
    props.dispatch(addMessageCreator(3));
  }
  const updateTextValue = () => {
    props.dispatch(changeTextValueCreator(textElement.current.value))
  }
  return (
    <div className={classes.container}>
      <div className={classes.messageContainer}>
        { messages }
      </div>
      <div className={classes.textarea}>
        <textarea 
          ref={textElement} 
          onChange={ updateTextValue } 
          value={props.textValue} 
          className={classes.text}
        />
        <button onClick={ read } className={classes.btn}></button>
      </div>
    </div>

  )
}

export default MessageContainer;