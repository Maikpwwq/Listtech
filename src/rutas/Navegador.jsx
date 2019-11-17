import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import BtnCerrarSesion from '../components/usuarios/Cerrar-sesion';
import * as ROLES from '../components/administracion/Roles';

const Navegador = ({ autorizarUsuario }) =>
    autorizarUsuario ? (
        <NavegacionAutorizada autorizarUsuario={autorizarUsuario} />
    ) : (
            <NavegacionNoAutorizada />
        );

const NavegacionAutorizada = ({ autorizarUsuario }) => (
    <ul>
        <li>
            <NavLink to="/cuerpo/">Cuerpo</NavLink>
        </li>
        <li>
            <NavLink to="/inicio/">Inicio</NavLink>
        </li>
        <li>
            <NavLink to="/perfil/">Perfil</NavLink>
        </li>
        {!!autorizarUsuario.roles[ROLES.ADMINISTRADOR] && (
            <li>
                <NavLink to="/configuracionAdministrador/"> Administrador</NavLink>
            </li>
        )}
        <li>
            <BtnCerrarSesion />
        </li>
    </ul>
);

const NavegacionNoAutorizada = () => (
    <ul>
        <li>
            <NavLink to="/cuerpo/">Cuerpo</NavLink>
        </li>
        <li>
            <NavLink to="/inicioSesion/">Inicio Sesion</NavLink>
        </li>
        <li>
            <NavLink to="/registro/">Registro</NavLink>
        </li>
    </ul>
);

const mapStateToProps = estado => ({
    autorizarUsuario: estado.estadoSesion.autorizarUsuario,
});

export default connect(mapStateToProps)(Navegador);