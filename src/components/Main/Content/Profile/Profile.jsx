import React from 'react';
import Ava from './Ava/Ava';
import classes from './Profile.module.css';
import Wallpaper from './Wallpaper/Wallpaper';
import Bio from './Bio/Bio';
import Stats from './Stats/Stats';

const Profile = () => {
  return (
    <div className={classes.container}>
      <Wallpaper url='https://deniliquinchamber.com.au/wp-content/uploads/2017/04/header-image-1.png' />
      <Ava url='https://i.pinimg.com/originals/9c/16/87/9c16872f4199e52e9a45292341108f42.jpg' />
      <Bio name='Andrew' surname='Olefir' age='27' place='Earth' />
    <Stats tasksCount='40' tasksDone='38' tasksFail='2' memoriesCount='14' nodesCount='21'/>
    </div>
  );
}

export default Profile;