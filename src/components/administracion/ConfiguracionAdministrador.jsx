import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { conAutorizacion, conEmailVerificacion } from '../sesiones/Sesion.jsx';
import { ListaUsuarios, ObjetoUsuario } from '../usuarios/Usuarios.jsx';
import * as ROLES from './Roles.js';

import * as ROUTES from '../../constants/routes';

const ConfiguracionAdministrador = () => (
  <div>
    <h1>Administrador de pagina</h1>
        <p>La página de administración es accesible para todos los usuarios que hayan iniciado sesión.</p>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={ObjetoUsuario} />
            <Route exact path={ROUTES.ADMIN} component={ListaUsuarios} />
    </Switch>
  </div>
);

const condicion = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  conEmailVerificacion,
  conAutorizacion(condicion),
)(ConfiguracionAdministrador);