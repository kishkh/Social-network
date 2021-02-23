import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    friends: state.friends
  }
}
const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer;