import React, { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as firebase from '../../init-firebase.js'
import { setUser, setLogin } from '../actions/actions.js';

import Layout from '../containers/Layout.jsx';

import Cuerpo from '../containers/Cuerpo.jsx';
import Perfil from '../components/Perfil.jsx';
import DetalleProducto from '../components/Detalle-producto.jsx';
import InicioSesion from '../components/Inicio-sesion.jsx';
import Registro from '../components/Registro.jsx';
import Contacto from '../components/Contacto.jsx';
import Compras from '../components/Compras.jsx';
import Tienda from '../components/Tienda.jsx';
import Marcas from '../components/Marcas.jsx';
import Nosotros from '../components/Nosotros.jsx';
import ConoceMas from '../components/ConoceMas.jsx';

import NotFound from '../paginas/NotFound';

import useGetData from '../hooks/useGetData';
const data = useGetData();

import { CircularProgress } from '@material-ui/core'

/* componentWillMount() {

}

componenteWillUnmount() {

} */

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
                props.setUser(user);
                props.setLogin(true);
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
                        <Route exact path="/home" component={Cuerpo} data={data.data}/>
                        <Route exact path="/perfil/:id" component={Perfil} />
                        <Route exact path="/detalleproducto/:id" component={DetalleProducto} />
                        <Route exact path="/iniciosesion" component={InicioSesion} />
                        <Route exact path="/registro" component={Registro} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/compras" component={Compras} />
                        <Route exact path="/tienda" component={Tienda} />
                        <Route exact path="/marcas" component={Marcas} />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Route exact path="/conocemas" component={ConoceMas} />                        
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