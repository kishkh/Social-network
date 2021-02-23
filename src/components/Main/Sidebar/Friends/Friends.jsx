import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';
import userDefaultAva from '../../../../assets/images/images.png'

const Friends = (props) => {
  const friends = props.users.filter(f => f.followed).map(fr => {
    return (
      <NavLink key={fr.id} to={`/dialogs/${fr.id}`}>
        <img src={fr.photos.small ? fr.photos.small : userDefaultAva}  alt='ava'></img>
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
