import React, { Component } from 'react';

class ObjetoMensaje extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            editText: this.props.mensaje.text,
        };
    }

    onToggleEditMode = () => {
        this.setState(state => ({
            editMode: !state.editMode,
            editText: this.props.mensaje.text,
        }));
    };

    onChangeEditText = event => {
        this.setState({ editText: event.target.value });
    };

    onAplicarEditarText = () => {
        this.props.onEditarMensaje(this.props.mensaje, this.state.editText);

        this.setState({ editMode: false });
    };

    render() {
        const { autorizarUsuario, mensaje, onRemoverMensaje } = this.props;
        const { editMode, editText } = this.state;

        return (
            <li>
                {editMode ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={this.onChangeEditText}
                    />
                ) : (
                        <span>
                            <strong>{mensaje.usuarioId}</strong> {mensaje.text}
                            {mensaje.editedAt && <span>(Edited)</span>}
                        </span>
                    )}

                {autorizarUsuario.uid === mensaje.usuarioId && (
                    <span>
                        {editMode ? (
                            <span>
                                <button onClick={this.onSaveEditText}>Aplicar</button>
                                <button onClick={this.onToggleEditMode}>Restablecer</button>
                            </span>
                        ) : (
                                <button onClick={this.onToggleEditMode}>Editar</button>
                            )}

                        {!editMode && (
                            <button
                                type="button"
                                onClick={() => onRemoverMensaje(mensaje.uid)}
                            >
                                Delete
                            </button>
                        )}
                    </span>
                )}
            </li>
        );
    }
}

export default ObjetoMensaje;