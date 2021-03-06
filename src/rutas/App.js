import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {ConAutentificacion} from '../components/sesiones/Sesion';

// importar Propiedades usuario  
import { setUsuario, setInicioSesion, } from '../actions/actions.js';

// importar Registro por Firebase  
import useFirebaseUsuario from '../hooks/useFirebaseUsuario';

// importar listados de productos y mas 
import useGetData from '../hooks/useGetData';

// Rutas y paginas
import NoEncontrado from '../paginas/NoEncontrado';
import Navegador from './Navegador.jsx';

// importar contenedores

import PaginaDistribucion from '../containers/Pagina-distribucion.jsx';

// importar componentes

import Destino from '../paginas/Destino.jsx';
import Inicio from '../components/usuarios/Inicio.jsx'
import Perfil from '../components/usuarios/Perfil.jsx';
import DetalleProducto from '../components/productos/Detalle-producto.jsx';
import FichaProducto from '../components/productos/Ficha-producto.jsx';
import InicioSesion from '../components/usuarios/Inicio-sesion.jsx';
import Registro from '../components/usuarios/Registro.jsx';
import OlvidoClave from '../components/usuarios/Olvido-clave.jsx'
import CambioClave from '../components/usuarios/Cambio-clave.jsx'
import CerrarSesion from '../components/usuarios/Cerrar-sesion.jsx'
import Compras from '../components/tienda/Compras.jsx';
import Tienda from '../components/tienda/Tienda.jsx';
import Contacto from '../components/marca/Contacto.jsx';
import Marcas from '../components/marca/Marcas.jsx';
import Nosotros from '../components/marca/Nosotros.jsx';
import ConoceMas from '../components/marca/ConoceMas.jsx';

import Promociones from '../components/productos/Promociones.jsx';
import Eventos from '../components/marca/Eventos.jsx';
import PoliticaPrivacidad from '../components/marca/Politica-privacidad.jsx';
import Informacion from '../components/marca/Informacion.jsx';

import ConfiguracionAdministrador from '../components/administracion/ConfiguracionAdministrador.jsx';
import ListaMensajes from '../components/mensajes/Lista-mensajes.jsx';
import ObjetoMensaje from '../components/mensajes/Objeto-mensaje.jsx';
import ListaUsuarios from '../components/usuarios/Lista-usuarios.jsx';
import ObjetoUsuario from '../components/usuarios/Objeto-usuario.jsx';

/* componentWillMount() {
}
componenteWillUnmount() {
} */

// Llamado de sesiones y rutas "App.js "

class App extends Component {

    constructor(props) {
        super(props);

        this.estado = {
            
        };

        // Llamado al Hook de Asignacion id: usuario por Firebase
        this.FirebaseUsuario = useFirebaseUsuario();

        // Sesiones


        // Llamado al Hook importar datos de firebase     
        
        this.data = this.data.bind(this);
        this.FirebaseUsuario = this.FirebaseUsuario.bind(this);
    };

    data = useGetData();

    // Niveles de acceso segun rutas del buscador    
    render() {
        
        return (
            this.FirebaseUsuario !== false ? (
                this.data.length === 0 ?
                    (
                        <h1> Cargando ...</h1>
                    ) : (
                        <div className="App">

                            <Navegador />

                            <BrowserRouter>
                                <PaginaDistribucion>
                                    <Switch>
                                        <Route exact path="/" component={Destino} data={data.data} />
                                        <Route exact path="/inicio/" component={Inicio} data={data.data} />
                                        <Route exact path="/perfil/:id/" component={Perfil} />

                                        <Route exact path="/configuracionAdministrador/:id/" component={ConfiguracionAdministrador} />
                                        <Route exact path="/configuracionAdministrador/" component={ConfiguracionAdministrador} />

                                        <Route exact path="/listaMensajes/" component={ListaMensajes} />
                                        <Route exact path="/listaMensajes/:id/" component={ListaMensajes} />
                                        <Route exact path="/objetoMensaje/" component={ObjetoMensaje} />
                                        <Route exact path="/objetoMensaje/:id/" component={ObjetoMensaje} />
                                        <Route exact path="/listaUsuarios/" component={ListaUsuarios} />
                                        <Route exact path="/listaUsuarios/:id/" component={ListaUsuarios} />
                                        <Route exact path="/objetoUsuario/" component={ObjetoUsuario} />
                                        <Route exact path="/objetoUsuario/:id/" component={ObjetoUsuario} />

                                        <Route exact path="/inicioSesion/" component={InicioSesion} />
                                        <Route exact path="/registro/" component={Registro} />
                                        <Route exact path="/olvidoClave/" component={OlvidoClave} />
                                        <Route exact path="/cambioClave/" component={CambioClave} />
                                        <Route exact path="/cerrarSesion/" component={CerrarSesion} />

                                        <Route exact path="/detalleProducto/:id/" component={DetalleProducto} data={data.data} />
                                        <Route exact path="/fichaProducto/:id/" component={FichaProducto} data={data.data} />
                                        <Route exact path="/compras/" component={Compras} data={data.data} />
                                        <Route exact path="/tienda/" component={Tienda} data={data.data} />
                                        <Route exact path="/promociones/" component={Promociones} />

                                        <Route exact path="/contacto/" component={Contacto} />
                                        <Route exact path="/marcas/" component={Marcas} />
                                        <Route exact path="/nosotros/" component={Nosotros} />
                                        <Route exact path="/conocemas/" component={ConoceMas} />
                                        <Route exact path="/eventos/" component={Eventos} />
                                        <Route exact path="/politicaPrivacidad/" component={PoliticaPrivacidad} />
                                        <Route exact path="/informacion/" component={Informacion} />

                                        <Route component={NoEncontrado} />
                                    </Switch>
                                </PaginaDistribucion>
                            </BrowserRouter>

                        </div>
                    )
            ) : (
                    <div id="loader">
                        <CircularProgress />
                    </div>
                )
        )
    };
};

// Asignar propiedades de inicio de sesion 

const mapStateToProps = {
    autorizarUsuario,
};

const mapDispatchToProps = {
    setUsuario,
    setInicioSesion,
};

export default compose(
    ConAutentificacion,
    connect(mapStateToProps, mapDispatchToProps)(App)); 
