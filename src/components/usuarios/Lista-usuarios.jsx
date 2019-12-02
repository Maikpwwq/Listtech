import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

class ListaUsuarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        if (!this.props.usuarios.length) {
            this.setState({ loading: true });
        }

        this.props.firebase.usuarios().on('value', snapshot => {
            this.props.onSetUsuarios(snapshot.val());

            this.setState({ loading: false });
        });
    }

    componentWillUnmount() {
        this.props.firebase.usuarios().off();
    }

    render() {
        const { usuarios } = this.props;
        const { loading } = this.state;

        return (
            <div>
                <h2>Usuarios</h2>
                {loading && <div> Cargando ...</div>}
                <ul>
                    {usuarios.map(user => (
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
                                <NavLink to={`configuracionAdministrador/${user.uid}`}>
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
    usuarios: Object.keys(state.usuariosState.usuarios || {}).map(key => ({
        ...state.usuariosState.usuarios[key],
        uid: key,
    })),
});

const mapDispatchToProps = dispatch => ({
    onSetUsuarios: usuarios => dispatch({ type: 'USUARIOS_SET', usuarios }),
});

export default compose(
    ConFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(ListaUsuarios);