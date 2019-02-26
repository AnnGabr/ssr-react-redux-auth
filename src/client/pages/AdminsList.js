import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsList extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        return (
            <div>
                Protected  list of admins:
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }

    renderAdmins() {
        return this.props.admins.map(admin => (
            <li key={admin.id}>{admin.name}</li>
        ));
    }
}

const mapStateToProps = ({ admins }) => ({ admins });

export default {
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
};