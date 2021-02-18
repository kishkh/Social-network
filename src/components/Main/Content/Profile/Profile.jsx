import React from 'react';
import Ava from './Ava/Ava';
import classes from './Profile.module.css';
import Wallpaper from './Wallpaper/Wallpaper';
import Bio from './Bio/Bio';
import Stats from './Stats/Stats';

const Profile = (props) => {
  return (
    <div className={classes.container} onClick={props.updateProfileStats}>
      <Wallpaper wallpaper={props.wallpaper} />
      <Ava ava={props.ava} />
      <Bio
        name={props.bio.name} age={props.bio.age}
        place={props.bio.placeOfBirth}
      />
      <Stats
        tasks={props.tasks}
        memories={props.memories}
        nodes={props.nodes}
      />
    </div>
  );
}

export default Profile;