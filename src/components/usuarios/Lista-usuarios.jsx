import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';
import * as ROUTES from '../../rutas/App.js';

class ListaUsuarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        if (!this.props.users.length) {
            this.setState({ loading: true });
        }

        this.props.firebase.users().on('value', snapshot => {
            this.props.onSetUsers(snapshot.val());

            this.setState({ loading: false });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users } = this.props;
        const { loading } = this.state;

        return (
            <div>
                <h2>Users</h2>
                {loading && <div> Cargando ...</div>}
                <ul>
                    {users.map(user => (
                        <li key={user.uid}>
                            <span>
                                <strong>ID:</strong> {user.uid}
                            </span>
                            <span>
                                <strong>E-Mail:</strong> {user.email}
                            </span>
                            <span>
                                <strong>Nombre de usuario:</strong> {user.username}
                            </span>
                            <span>
                                <NavLink to={`${ROUTES.ADMIN}/${user.uid}`}>
                                    Detalles
                                </NavLink>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: Object.keys(state.userState.users || {}).map(key => ({
        ...state.userState.users[key],
        uid: key,
    })),
});

const mapDispatchToProps = dispatch => ({
    onSetUsers: users => dispatch({ type: 'USERS_SET', users }),
});

export default compose(
    ConFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(ListaUsuarios);