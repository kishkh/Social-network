import {createStore, combineReducers} from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import friendsReducer from './reducers/friends-reducer';
import memoriesReducer from './reducers/memories-reducer';
import nodesReducer from './reducers/nodes-reducer';
import profileReducer from './reducers/profile-reducer';
import tasksReducer from './reducers/tasks-reducer';
import usersReducer from './reducers/users-reducer';

const reducers = combineReducers({
  dialogs: dialogsReducer,
  friends: friendsReducer,
  memories: memoriesReducer,
  nodes: nodesReducer,
  profile: profileReducer,
  tasks: tasksReducer,
  users: usersReducer
})

const store = createStore(reducers);

window.store = store
 
export default store;
