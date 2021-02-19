import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {changeFollowCreator} from './../../../../redux/reducers/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeFollow: (id) => {
      dispatch(changeFollowCreator(id))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;