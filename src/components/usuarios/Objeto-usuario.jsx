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
        if (!this.props.usuario) {
            this.setState({ loading: true });
        }

        this.props.firebase
            .usuario(this.props.match.params.id)
            .on('value', snapshot => {
                this.props.onSetUsuario(
                    snapshot.val(),
                    this.props.match.params.id,
                );

                this.setState({ loading: false });
            });
    }

    componentWillUnmount() {
        this.props.firebase.usuario(this.props.match.params.id).off();
    }

    onEnviarEmailActualizarClave = () => {
        this.props.firebase.doActualizarClave(this.props.usuario.email);
    };

    render() {
        const { usuario } = this.props;
        const { loading } = this.state;

        return (
            <div>
                <h2> Usuario ({this.props.match.params.id})</h2>

                {
                    loading && <div>
                        Cargando ...
                        </div>
                }

                {usuario && (
                    <div>
                        <span>
                            <strong>ID:</strong>
                            {usuario.uid}
                        </span>
                        <span>
                            <strong>E-Mail:</strong>
                            {usuario.email}
                        </span>
                        <span>
                            <strong>Nombre de ususario:</strong>
                            {usuario.usuarioname}
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
    usuario: (state.usuarioState.usuarios || {})
    [props.match.params.id],
});

const mapDispatchToProps = dispatch => ({
    onSetUsuario: (usuario, uid) => dispatch({
        type: 'USUARIO_SET',
        usuario,
        uid
    }),
});

export default compose(
    ConFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(ObjetoUsuario);