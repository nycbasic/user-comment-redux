import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserComments from '../containers/user-comments';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <UserComments />
      </div>
    );
  }
}
