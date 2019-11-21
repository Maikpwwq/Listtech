import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase.jsx';
import ListaMensajes from './Lista-mensajes.jsx';

class Mensajes extends Component {
    constructor(props) {
        super(props);

        this.estado = {
            texto: '',
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
        if (props.limite !== this.props.limite) {
            this.onActualizarMensajes();
        }
    }

    onActualizarMensajes = () => {
        this.props.firebase
            .mensajes()
            .orderByChild('createdAt')
            .limiteToLast(this.props.limite)
            .on('value', snapshot => {
                this.props.onSetMensajes(snapshot.val());

                this.setEstado({ loading: false });
            });
    };

    componentWillUnmount() {
        this.props.firebase.mensajes().off();
    }

    onChangeTexto = event => {
        this.setState({ texto: event.target.value });
    };

    onCrearMensaje = (event, autorizarUsuario) => {
        this.props.firebase.mensajes().push({
            texto: this.estado.texto,
            userId: autorizarUsuario.uid,
            createdAt: this.props.firebase.serverValue.TIMESTAMP,
        });

        this.setState({ texto: '' });

        event.preventDefault();
    };

    onEditarMensaje = (mensaje, texto) => {
        const { uid, ...mensajeSnapshot } = mensaje;

        this.props.firebase.mensaje(mensaje.uid).set({
            ...mensajeSnapshot,
            texto,
            editedAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    };

    onRemoverMensaje = uid => {
        this.props.firebase.mensaje(uid).remove();
    };

    onNextPage = () => {
        this.props.onSetLimiteMensajes(this.props.limite + 5);
    };

    render() {

        const { mensajes } = this.props;
        const { texto, loading } = this.estado;

        return (
            <div>
                {!loading && mensajes && (
                    <button
                        type="button"
                        onClick={this.onNextPage}
                    > Mas
                    </button>
                )}

                {loading && <div> Cargando ...</div>}

                {mensajes && (
                    <ListaMensajes
                        autorizarUsuario={this.props.autorizarUsuario}
                        mensajes={mensajes}
                        onEditarMensaje={this.onEditarMensaje}
                        onRemoverMensaje={this.onRemoverMensaje}
                    />
                )}

                {!mensajes &&
                    <div>
                        No tiene mensajes justo ahora...</div>
                }

                <form
                    onSubmit={event =>
                        this.onCrearMensaje(event, this.props.autorizarUsuario)
                    }
                >
                    <input
                        type="texto"
                        value={texto}
                        onChange={this.onChangeTexto}
                    />
                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = estado => ({
    autorizarUsuario: estado.estadoSesion.autorizarUsuario,
    mensajes: Object.keys(estado.estadoMensaje.mensajes || {}).map(
        key => ({
            ...estado.estadoMensaje.mensajes[key],
            uid: key,
        }),
    ),
    limite: estado.estadoMensaje.limite,
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