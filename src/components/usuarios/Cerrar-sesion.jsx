import React from 'react';

import { ConFirebase } from '../administracion/Index-firebase';

const BotonCerrarSesion = ({ firebase }) => (
    <button type="button"
        onClick={firebase.doCerrarSesion}>
        Cerrar sesion 
  </button>
);

export default ConFirebase(BotonCerrarSesion);