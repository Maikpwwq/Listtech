import React from 'react';
import { compose } from 'recompose';

import { ConAutorizacion, ConVerificacionEmail } from '../sesiones/Sesion';
import Mensajes from '../mensajes/Mensajes';

const PaginaInicio = () => (
    <div>
        <h1>Pagina Inicio</h1>
        <p>La página de inicio es accesible para todos los usuarios registrados.</p>

        <Mensajes />
    </div>
);

const condition = authUser => !!authUser;

export default compose(
    ConVerificacionEmail,
    ConAutorizacion(condition),
)(PaginaInicio);