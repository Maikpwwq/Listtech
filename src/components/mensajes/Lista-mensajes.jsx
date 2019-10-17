import React from 'react';

import ObjetoMensaje from './Objeto-mensaje.jsx';

const ListaMensajes = ({
    autorizarUsuario,
    mensajes,
    onEditarMensaje,
    onRemoverMensaje,
}) => (
        <ul>
            {mensajes.map(mensaje => (
                <ObjetoMensaje
                    autorizarUsuario={autorizarUsuario}
                    key={mensaje.uid}
                    mensaje={mensaje}
                    onEditarMensaje={onEditarMensaje}
                    onRemoverMensaje={onRemoverMensaje}
                />
            ))}
        </ul>
    );

export default ListaMensajes;