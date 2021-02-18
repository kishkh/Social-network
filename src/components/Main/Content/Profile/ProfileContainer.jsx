import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    wallpaper: state.profile.wallpaper,
    ava: state.profile.ava,
    bio: state.profile.bio,
    tasks: state.tasks.tasks,
    nodes: state.nodes.nodes,
    memories: state.memories.memories,
  }
}

const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer;
