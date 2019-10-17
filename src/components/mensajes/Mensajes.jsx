import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase.jsx';
import ListaMensajes from './Lista-mensajes.jsx';

class Mensajes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            loading: false,
        };
    }

    componentDidMount() {
        if (!this.props.mensajes.length) {
            this.setEstado({ loading: true });
        }

        this.onActualizarMensajes();
    }

    componentDidUpdate(props) {
        if (props.limit !== this.props.limit) {
            this.onActualizarMensajes();
        }
    }

    onActualizarMensajes = () => {
        this.props.firebase
            .mensajes()
            .orderByChild('createdAt')
            .limitToLast(this.props.limit)
            .on('value', snapshot => {
                this.props.onSetMensajes(snapshot.val());

                this.setEstado({ loading: false });
            });
    };

    componentWillUnmount() {
        this.props.firebase.mensajes().off();
    }

    onChangeText = event => {
        this.setState({ text: event.target.value });
    };

    onCrearMensaje = (event, autorizarUsuario) => {
        this.props.firebase.mensajes().push({
            text: this.state.text,
            userId: autorizarUsuario.uid,
            createdAt: this.props.firebase.serverValue.TIMESTAMP,
        });

        this.setState({ text: '' });

        event.preventDefault();
    };

    onEditarMensaje = (message, text) => {
        const { uid, ...messageSnapshot } = message;

        this.props.firebase.message(message.uid).set({
            ...messageSnapshot,
            text,
            editedAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    };

    onRemoverMensaje = uid => {
        this.props.firebase.message(uid).remove();
    };

    onNextPage = () => {
        this.props.onSetLimiteMensajes(this.props.limit + 5);
    };

    render() {
        const { mensajes } = this.props;
        const { text, loading } = this.state;

        return (
            <div>
                {!loading && mensajes && (
                    <button type="button" onClick={this.onNextPage}>
                        Mas
          </button>
                )}

                {loading && <div>Cargando ...</div>}

                {mensajes && (
                    <ListaMensajes
                        autorizarUsuario={this.props.autorizarUsuario}
                        mensajes={mensajes}
                        onEditarMensaje={this.onEditarMensaje}
                        onRemoverMensaje={this.onRemoverMensaje}
                    />
                )}

                {!mensajes && <div>No tiene mensajes justo ahora...</div>}

                <form
                    onSubmit={event =>
                        this.onCrearMensaje(event, this.props.autorizarUsuario)
                    }
                >
                    <input
                        type="text"
                        value={text}
                        onChange={this.onChangeText}
                    />
                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    autorizarUsuario: state.estadoSesion.autorizarUsuario,
    mensajes: Object.keys(state.estadoMensaje.mensajes || {}).map(
        key => ({
            ...state.estadoMensaje.mensajes[key],
            uid: key,
        }),
    ),
    limit: state.estadoMensaje.limite,
});

const mapDispatchToProps = dispatch => ({
    onSetMensajes: mensajes =>
        dispatch({ type: 'SET_MENSAJES_', mensajes }),
    onSetLimiteMensajes: limite =>
        dispatch({ type: 'SET_LIMITE_MENSAJES', limite }),
});

export default compose(
    ConFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Mensajes);