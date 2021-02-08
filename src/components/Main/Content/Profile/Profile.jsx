import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
const Profile = () => {
  return (
    <div className={classes.content}>
      <img className={classes.content_img} src='https://st2.depositphotos.com/4604305/8303/i/950/depositphotos_83035824-stock-photo-lahemaa-national-park-forest-panorama.jpg' alt='sss' />
      <div>
        ava+desc
      </div>
      <MyPosts />
      
    </div>
  );
}

export default Profile;