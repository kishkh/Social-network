import React from 'react';
import classes from './Users.module.css';
import User from './User/User';

const Users = (props) => {
  const totalPages = Math.ceil(props.usersCount / props.usersOnPage)
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }
  const users = props.users.map(u => {
    return (
      <User
        key={u.id} changeFollow={props.changeFollow}
        followed={u.followed} name={u.name}
        id={u.id} ava={u.photos.small}
      />
    )
  })
  return (
    <div className={classes.container}>
      <div className={classes.pageContainer}>
        {
          pages.map(m => <span
            className={m === props.currentPage ? `${classes.page} ${classes.selected}` : classes.page}
            onClick={() => { props.currentPageValue(m) }}>{m}</span>)
        }
      </div>
      {users}
    </div>

  )

}

export default Users;