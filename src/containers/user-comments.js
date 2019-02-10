import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserComments extends Component {
    render() {
        if(!this.props.users) {
            return (
                <div className="card">
                    <div className="card-body">
                        Select a User!
                    </div>
                </div>
            )
        }
        return (
            <div className="card">
                <div className="card-body">
                    <p>{this.props.users.comment}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.activeUser
    }
}

export default connect(mapStateToProps)(UserComments);