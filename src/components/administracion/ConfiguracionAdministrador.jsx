import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { ConAutorizacion, ConVerificacionEmail } from '../sesiones/Sesion';

import { ListaUsuarios, ObjetoUsuario } from '../usuarios/Usuarios.jsx';
import { ADMINISTRADOR } from './Roles.js';

const ConfiguracionAdministrador = () => (
  <div>
    <h1>Administrador de pagina</h1>
        <p>La página de administración es accesible para todos los usuarios que hayan iniciado sesión.</p>

    <Switch>
            <Route exact path="/objetoUsuario" component={ObjetoUsuario} />
            <Route exact path="/listaUsuarios" component={ListaUsuarios} />
    </Switch>
  </div>
);

const condicion = autorizarUsuario =>
    autorizarUsuario && !!autorizarUsuario.roles{ ADMINISTRADOR };

export default compose(
  ConVerificacionEmail,
  ConAutorizacion(condicion),
)(ConfiguracionAdministrador);