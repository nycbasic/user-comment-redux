import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";

class UserList extends Component {
  renderList() {
    return this.props.users.map((user, index) => {
      return (
        <a
          onClick={() => this.props.selectUser(user)}
          key={index}
          className="list-group-item list-group-item-action"
        >
          {user.username}
        </a>
      );
    });
  }
  render() {
    return <div className="list-group">{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    selectUser: state.activeUser
  };
}

export default connect(
  mapStateToProps,
  { selectUser }
)(UserList);
