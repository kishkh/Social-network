import React from 'react';
import DialogLink from './DialogLink/DialogLink';
import classes from './DialogName.module.css';

const DialogName = (props) => {
  const dialogs =  props.id.map( item => {
    const userArr = props.users.filter(user => {
      return user.id === item.id;
      })
    const [user] = userArr;
    return <DialogLink name={user.name} id={user.id} ava={user.ava} />
  })

  return (
    <div className={classes.dialogContainer}>
      { dialogs }
    </div>
  );
}

export default DialogName;