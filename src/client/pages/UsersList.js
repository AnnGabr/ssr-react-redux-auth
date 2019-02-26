import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                {this.head()}
                Here`s a  list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }

    head() {
        const count = this.props.users.length;
        return (
            <Helmet>
                <title>{`Users App (${count})`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        );
    }

    renderUsers() {
        return this.props.users.map(user => (
            <li key={user.id}>{user.name}</li>
        ));
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData
};