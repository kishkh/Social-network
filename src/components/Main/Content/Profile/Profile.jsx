import React from 'react';
import Ava from './Ava/Ava';
import classes from './Profile.module.css';
import Wallpaper from './Wallpaper/Wallpaper';
import Bio from './Bio/Bio';
import Stats from './Stats/Stats';

const Profile = (props) => {
  const {wallpaper, ava, bio, stats} = props.data
  return (
    <div className={classes.container}>
      <Wallpaper url={wallpaper} />
      <Ava url={ava} />
      <Bio name={bio.name} age={bio.age} place={bio.placeOfBirth} />
    <Stats tasksCount={stats.tasks} tasksDone={stats.tasksDone} tasksFail={stats.tasksFail} memoriesCount={stats.memories} nodesCount={stats.nodes}/>
    </div>
  );
}

export default Profile;