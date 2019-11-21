import React, { Component } from 'react';

class ObjetoMensaje extends Component {
    constructor(props) {
        super(props);

        this.estado = {
            editMode: false,
            editTexto: this.props.mensaje.texto,
        };
    };

    onToggleEditMode = () => {
        this.setState(estado => ({
            editMode: !estado.editMode,
            editTexto: this.props.mensaje.texto,
        }));
    };

    onChangeEditTexto = event => {
        this.setState({ editTexto: event.target.value });
    };

    onAplicarEditarTexto = () => {
        this.props.onEditarMensaje(this.props.mensaje, this.estado.editTexto);

        this.setState({ editMode: false });
    };

    render() {
        const { autorizarUsuario, mensaje, onRemoverMensaje } = this.props;
        const { editMode, editTexto } = this.estado;

        return (
            <li>
                {editMode ? (
                    <input
                        type="texto"
                        value={editTexto}
                        onChange={this.onChangeEditTexto}
                    />
                ) : (
                        <span>
                            <strong>{mensaje.usuarioId}</strong> {mensaje.texto}
                            {mensaje.editedAt && <span>(Edited)</span>}
                        </span>
                    )}

                {autorizarUsuario.uid === mensaje.usuarioId && (
                    <span>
                        {editMode ? (
                            <span>
                                <button onClick={this.onSaveEditTexto}>Aplicar</button>
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