import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as firebase from '../init-firebase.js'

import { setUsuario, setInicioSesion } from '../actions/actions.js';

import Layout from '../containers/Layout.jsx';
import Cuerpo from '../containers/Cuerpo.jsx';

//import Inicio from '../components/usuarios/Inicio.jsx'
import Perfil from '../components/usuarios/Perfil.jsx';
import DetalleProducto from '../components/productos/Detalle-producto.jsx';
//import FichaProducto from '../components/productos/Ficha-producto.jsx';
import InicioSesion from '../components/usuarios/Inicio-sesion.jsx';
import Registro from '../components/usuarios/Registro.jsx';
import OlvidoClave from '../components/usuarios/Olvido-clave.jsx'
import CambioClave from '../components/usuarios/Cambio-clave.jsx'
//import CerrarSesion from '../components/usuarios/Cerrar-sesion.jsx'
import Compras from '../components/tienda/Compras.jsx';
//import Tienda from '../components/tienda/Tienda.jsx';
import Contacto from '../components/marca/Contacto.jsx';
import Marcas from '../components/marca/Marcas.jsx';
import Nosotros from '../components/marca/Nosotros.jsx';
import ConoceMas from '../components/marca/ConoceMas.jsx';

import ConfiguracionAdministrador from '../components/administracion/ConfiguracionAdministrador.jsx';
import ListaMensajes from '../components/mensajes/ListaMensajes.jsx';
import ListaUsuarios from '../components/usuarios/ListaUsuarios.jsx';

import NotFound from '../paginas/NotFound';

import useGetData from '../hooks/useGetData';
const data = useGetData();

/* componentWillMount() {

}

componenteWillUnmount() {

} */

//<Route exact path="/tienda" component={Tienda} />

const App = () => {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {        
        firebase.isInitialized().then(val => {
            setFirebaseInitialized(val)
        })
    }, []);

    useEffect(() => {
        firebase().onAuthStateChanged((user) => {
            if (user) {
                this.props.setUser(user);
                this.props.setLogin(true);
            }
        });
    }, []);

    // Niveles de acceso segun rutas    
    return (
        firebaseInitialized !== false ? (
            data.length === 0 ? <h1> Cargando ...</h1> :
                <div className="App">

                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Cuerpo} data={data.data} />
                                <Route exact path="/inicio" component={Inicio} data={data.data} />
                                <Route exact path="/perfil/:id" component={Perfil} />
                                <Route exact path="/administracion/:id" component={Administradores} />
                                <Route exact path="/detalleProducto/:id" component={DetalleProducto} />
                                <Route exact path="/fichaProducto/:id" component={FichaProducto} />
                                <Route exact path="/iniciarSesion" component={InicioSesion} />
                                <Route exact path="/registro" component={Registro} />                                
                                <Route exact path="/olvidoClave" component={OlvidoClave} />
                                <Route exact path="/cambioClave" component={CambioClave} />
                                <Route exact path="/cerrarSesion" component={CerrarSesion} />
                                <Route exact path="/compras" component={Compras} />
                                <Route exact path="/tienda" component={Tienda} />
                                <Route exact path="/contacto" component={Contacto} />
                                <Route exact path="/marcas" component={Marcas} />
                                <Route exact path="/nosotros" component={Nosotros} />
                                <Route exact path="/conocemas" component={ConoceMas} />
                                <Route exact path="/configuracionAdministrador" component={ConfiguracionAdministrador} />                                                                
                                <Route exact path="/listaMensajes" component={ListaMensajes} />
                                <Route exact path="/listaUsuarios" component={ListaUsuarios} />
                                
                                <Route component={NotFound} />
                            </Switch>
                        </Layout>
                    </BrowserRouter>

                </div>
        ) : <div id="loader"><CircularProgress /></div>
    );
}


const mapDispatchToProps = {
    setUser,
    setLogin,
}

export default connect(null, mapDispatchToProps)(App);
        