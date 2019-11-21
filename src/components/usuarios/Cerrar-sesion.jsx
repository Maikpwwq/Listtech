import React from 'react';

import { ConFirebase } from '../administracion/Index-firebase';

const BtnCerrarSesion = ({ firebase }) => (
    <button type="button"
        onClick={firebase.doCerrarSesion}>
        Cerrar sesion 
  </button>
);

export default ConFirebase(BtnCerrarSesion);