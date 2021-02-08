import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.addPost}>
        <span>Add new post</span>
        <div>
          <input></input>
          <button>Add</button>
        </div>
      </div>
      <div>
        <Post text='Some text' like='10'/>
        <Post text='Hi every one' like='17'/>
        <Post text='Let is writing long ' like='13'/>
        <Post text='Last post' like='15'/>
      </div>
    </div>
  );
}

export default MyPosts;