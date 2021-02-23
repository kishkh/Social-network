import React from 'react';
import {connect} from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import {changeFollowCreator, setUsersCreator, getUsersCountCreator, setCurrentValueCreator, togglePreloaderCreator} from './../../../../redux/reducers/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    usersCount: state.users.usersCount,
    usersOnPage: state.users.usersOnPage,
    isProcessing: state.users.isProcessing

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    togglePreloader: (isProcessing) => {
      dispatch(togglePreloaderCreator(isProcessing))
    },
    changeFollow: (id) => {
      dispatch(changeFollowCreator(id))
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users))
    },
    getUsersCount: (users) => {
      dispatch(getUsersCountCreator(users))
    },
    setCurrentValue: (current) => {
      dispatch(setCurrentValueCreator(current))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default UsersContainer;