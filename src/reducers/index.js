import { combineReducers } from 'redux';
import userList from './reducer_user_list';
import activeSelectedUser from './reducer_active_user';

const rootReducer = combineReducers({
  users: userList,
  activeUser: activeSelectedUser
});

export default rootReducer;
