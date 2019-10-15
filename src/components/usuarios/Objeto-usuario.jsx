import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

class ObjetoUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        if (!this.props.user) {
            this.setState({ loading: true });
        }

        this.props.firebase
            .user(this.props.match.params.id)
            .on('value', snapshot => {
                this.props.onSetUser(
                    snapshot.val(),
                    this.props.match.params.id,
                );

                this.setState({ loading: false });
            });
    }

    componentWillUnmount() {
        this.props.firebase.user(this.props.match.params.id).off();
    }

    onEnviarEmailActualizarClave = () => {
        this.props.firebase.doActualizarClave(this.props.user.email);
    };

    render() {
        const { user } = this.props;
        const { loading } = this.state;

        return (
            <div>
                <h2>User ({this.props.match.params.id})</h2>
                {loading && <div> Cargando ...</div>}

                {user && (
                    <div>
                        <span>
                            <strong>ID:</strong> {user.uid}
                        </span>
                        <span>
                            <strong>E-Mail:</strong> {user.email}
                        </span>
                        <span>
                            <strong>Nombre de ususario:</strong> {user.username}
                        </span>
                        <span>
                            <button
                                type="button"
                                onClick={this.onSendPasswordResetEmail}
                            >
                                Clave actualizada correctamente
                            </button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    user: (state.userState.users || {})[props.match.params.id],
});

const mapDispatchToProps = dispatch => ({
    onSetUser: (user, uid) => dispatch({ type: 'USER_SET', user, uid }),
});

export default compose(
    ConFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(ObjetoUsuario);