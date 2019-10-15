import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase,jsx';
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
        if (!this.props.messages.length) {
            this.setState({ loading: true });
        }

        this.onListenForMessages();
    }

    componentDidUpdate(props) {
        if (props.limit !== this.props.limit) {
            this.onListenForMessages();
        }
    }

    onListenForMessages = () => {
        this.props.firebase
            .messages()
            .orderByChild('createdAt')
            .limitToLast(this.props.limit)
            .on('value', snapshot => {
                this.props.onSetMessages(snapshot.val());

                this.setState({ loading: false });
            });
    };

    componentWillUnmount() {
        this.props.firebase.messages().off();
    }

    onChangeText = event => {
        this.setState({ text: event.target.value });
    };

    onCrearMensaje = (event, authUser) => {
        this.props.firebase.messages().push({
            text: this.state.text,
            userId: authUser.uid,
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
        this.props.onSetMessagesLimit(this.props.limit + 5);
    };

    render() {
        const { messages } = this.props;
        const { text, loading } = this.state;

        return (
            <div>
                {!loading && messages && (
                    <button type="button" onClick={this.onNextPage}>
                        Mas
          </button>
                )}

                {loading && <div>Cargando ...</div>}

                {messages && (
                    <MessageList
                        authUser={this.props.authUser}
                        messages={messages}
                        onEditarMensaje={this.onEditarMensaje}
                        onRemoverMensaje={this.onRemoverMensaje}
                    />
                )}

                {!messages && <div>No tiene mensajes justo ahora...</div>}

                <form
                    onSubmit={event =>
                        this.onCrearMensaje(event, this.props.authUser)
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
    authUser: state.sessionState.authUser,
    messages: Object.keys(state.messageState.messages || {}).map(
        key => ({
            ...state.messageState.messages[key],
            uid: key,
        }),
    ),
    limit: state.messageState.limit,
});

const mapDispatchToProps = dispatch => ({
    onSetMessages: messages =>
        dispatch({ type: 'MESSAGES_SET', messages }),
    onSetMessagesLimit: limit =>
        dispatch({ type: 'MESSAGES_LIMIT_SET', limit }),
});

export default compose(
    ConFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Messages);