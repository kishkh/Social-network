import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {
  return (
    <div className={classes.container}>
      <span>{props.text}</span>
      <span>{`Likes: ${props.like}`}</span>
      <button>like</button>
    </div>
  );
}

export default Post;