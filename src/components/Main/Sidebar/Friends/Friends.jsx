import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';

const Friends = (props) => {
  const friends = props.friends.map(friend => {
    const ava = props.users.filter(ava => ava.id === friend.id)
    return (
      <NavLink key={friend.id} to={`/dialogs/${friend.id}`}>
        <img src={ava[0].ava}  alt='ava'></img>
      </NavLink>
    )
  })
  return (
    <div className={classes.container}>
      { friends }
    </div>
  )
}

export default Friends;
