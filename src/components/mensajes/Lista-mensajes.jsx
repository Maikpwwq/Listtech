import React from 'react';

import ObjetoMensaje from './Objeto-mensaje.jsx';

const ListaMensajes = ({
    authUser,
    messages,
    onEditarMensaje,
    onRemoverMensaje,
}) => (
        <ul>
            {messages.map(message => (
                <ObjetoMensaje
                    authUser={authUser}
                    key={message.uid}
                    message={message}
                    onEditarMensaje={onEditarMensaje}
                    onRemoverMensaje={onRemoverMensaje}
                />
            ))}
        </ul>
    );

export default ListaMensajes;