import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import preloader from '../../../../assets/images/preloader1.svg';

import classes from './Users.module.css';
import Preloader from '../../../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.togglePreloader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`).then(response => {
      this.props.togglePreloader(false)
      this.props.setUsers(response.data.items)
      this.props.getUsersCount(response.data.totalCount)
    })
  }

  currentPageValue = (page) => {
    this.props.togglePreloader(true)
    this.props.setCurrentValue(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${page}`).then(response => {
      this.props.togglePreloader(false)
      this.props.setUsers(response.data.items)
    })
  }
  render() {
    return (
      <>
        {this.props.isProcessing && <Preloader />}
        <Users 
          usersCount={this.props.usersCount} 
          usersOnPage={this.props.usersOnPage} 
          currentPage={this.props.currentPage} 
          users={this.props.users}
          changeFollow={this.props.changeFollow}
          currentPageValue={this.currentPageValue}
        />
      </>
    )
  }
}
    
    // else { 
    //   if(this.props.currentPage < 4) { 
    //     return [
    //       <span className={classes.page} onClick={props.}>1</span>,
    //       <span className={classes.page} onClick={props.}>2</span>,
    //       <span className={classes.page} onClick={props.}>3</span>,
    //       <span className={classes.page} onClick={props.}>4</span>,
    //       <span className={classes.page} onClick={props.}>...</span>,
    //       <span className={classes.page} onClick={props.}>{pages.length}</span>
    //     ]
    //   } else if (this.props.currentPage > pages.length - 3) { 
    //     return [
    //       <span className={classes.page} onClick={props.}>1</span>,
    //       <span className={classes.page} onClick={props.}>...</span>,
    //       <span className={classes.page} onClick={props.}>{pages.length - 3}</span>,
    //       <span className={classes.page} onClick={props.}>{pages.length - 2}</span>,
    //       <span className={classes.page} onClick={props.}>{pages.length - 1}</span>,
    //       <span className={classes.page} onClick={props.}>{pages.length}</span>
    //     ]
    //   } else {
    //     return [
    //       <span className={classes.page} onClick={props.}>1</span>,
    //       <span className={classes.page} onClick={props.}>...</span>,
    //       <span className={classes.page} onClick={props.}>{this.props.currentPage - 1}</span>,
    //       <span className={classes.page} onClick={props.}>{this.props.currentPage}</span>,
    //       <span className={classes.page} onClick={props.}>{this.props.currentPage + 1}</span>,
    //       <span className={classes.page} onClick={props.}>...</span>,
    //       <span className={classes.page} onClick={props.}>{pages.length}</span>
    //     ]
    //   }
    // }

export default UsersAPIComponent;