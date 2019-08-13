import React, { Component } from 'react';

import logo from '../imagenes/Listtech-Logo.png';

import firebase from '../init-firebase.js'
import { connect } from 'react-redux';
import { setUser, setLogin } from '../actions/actions.js';

import styled from 'styled-components'

const PerfilStyled = styled.div`
    text-align: center;
    box-sizing: border-box;
    display: block;
`;

const PerfilContainer = styled.div`
    
`;

const PerfilContent = styled.div`
    
`;

const BarraNavegacion = styled.div`
    
`;

const ContenedorColumnas = styled.div`
    
`;

const ColumnaDerecha = styled.div`
    
`;

const ColumnaCentral = styled.div`
    
`;

const ColumnaIzquierda = styled.div`
    
`;


/*
 firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    }
    else {
        console.log('not logged in');
        btnLogout.classList.add('hide');
    }
});


    // Evento Cerrar Sesion
    btnLogout.addEventListener('click', e => {
        auth().signOut();
    });
*/

class Perfil extends Component {    

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userdisplayName: '{ props.user.displayName }',
            userphotoURL: '{ props.user.photoURL }',
            useremail: '{ props.user.email }',
            avatar: '',
            porfesion: '',
            direccion: '',
            cumpleanos: '',
        };
    }

    logoutFacebook = () => {
        firebase().singOut()
            .then(() => {
                this.props.setUser({});
                this.props.setLogin(false);
                this.props.history.push('/');
                console.log('Sesion finalizada');
            });
    };

    ChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    /*if(!firebase.getCurrentUsername()) {
    // not logged in
    alert('Please login first')
    props.history.replace('/login')
    return null
    }*/

    render() {
        return (
            <PerfilStyled>
                <PerfilContainer>
                    <PerfilContent>
                        // Barra de navegacion
                        <BarraNavegacion>
                            <div className="bar theme-d2 left-align large">

                                <a className="bar-item button hide-medium hide-large right padding-large hover-white large theme-d2"
                                    href="javascript:void(0);" onClick="openNav()">
                                    <i className="fa fa-bars"></i></a>

                                <a className="bar-item button padding-large theme-d4"
                                    href="#" >
                                    <i className="fa fa-home margin-right"> { logo } </i>Inicio</a>

                                <a href="#" className="bar-item button hide-small padding-large hover-white"
                                    title="Noticias">
                                    <i className="fa fa-globe"></i></a>

                                <a href="#" className="bar-item button hide-small padding-large hover-white"
                                    title="Configuracion de Cuenta">
                                    <i className="fa fa-user"></i></a>

                                <a href="#" className="bar-item button hide-small padding-large hover-white"
                                    title="Mensajes">
                                    <i className="fa fa-envelope"></i></a>

                                <div className="dropdown-hover hide-small">
                                    <button className="button padding-large" title="Notificaciones">
                                        <i className="fa fa-bell"></i>
                                        <span className="badge right small green">3
                                        </span>
                                    </button>

                                    <div className="dropdown-content card-4 bar-block" style="width:300px">
                                        <a href="#" className="bar-item button"> Bienvenido </a>                                       
                                    </div>
                                </div>

                                <div className="dropdown-hover hide-small">
                                    <a href="#"
                                    className="bar-item button hide-small right padding-large hover-white"
                                    >
                                    <img src="/w3images/avatar2.png"
                                        className="circle"
                                        title="Mi Cuenta"
                                        style="height:23px;width:23px"
                                        alt="Avatar" />
                                    </a>
                                    <div className="dropdown-content card-4 bar-block" style="width:300px">
                                        <a href="#" className="bar-item button"> Cerrar Sesion </a>
                                    </div>
                                </div>
                            </div>
                        </BarraNavegacion>

                        // Navbar on small screens 
                        <div id="navDemo"
                            className="bar-block theme-d2 hide hide-large hide-medium large">
                            <a href="#" className="bar-item button padding-large">Link 1</a>
                            <a href="#" className="bar-item button padding-large">Link 2</a>
                            <a href="#" className="bar-item button padding-large">Link 3</a>
                            <a href="#" className="bar-item button padding-large">My Profile</a>
                        </div>

                        // Page Container 
                        <div className="container content"
                            style="max-width:1400px;margin-top:80px">

                            // The Grid 
                            <ContenedorColumnas className="row">

                                // Columna Derecha 
                                <ColumnaDerecha className="col m3">
                                    // Profile 
                                    <div className="card round white">
                                        <div className="container">
                                            <h4 className="center">Mi Perfil</h4>
                                            <p className="center">
                                                <img src="/w3images/avatar3.png"
                                                    className="circle"
                                                    style="height:106px;width:106px"
                                                    alt="Avatar" />
                                            </p>
                                            <hr />
                                            <p>
                                                <i className="fa fa-pencil fa-fw margin-right text-theme">
                                                </i> Profesion </p>
                                            <p>
                                                <i className="fa fa-home fa-fw margin-right text-theme">
                                                </i> Direccion </p>
                                            <p>
                                                <i className="fa fa-birthday-cake fa-fw margin-right text-theme">
                                                </i> Cumpleanos </p>
                                        </div>
                                    </div>
                                    <br />

                                    // Accordion Compras 
                                    <div className="card round">
                                        <div className="white">

                                            <button onclick="myFunction('Demo1')"
                                                className="button block theme-l1 left-align">
                                                <i className="fa fa-circle-o-notch fa-fw margin-right"></i>
                                                Mis Compras 
                                            </button>
                                            <div id="Demo1" className="hide container">
                                                <p>Some text..</p>
                                            </div>

                                            <button onclick="myFunction('Demo2')"
                                                className="button block theme-l1 left-align">
                                                <i className="fa fa-calendar-check-o fa-fw margin-right"></i>
                                                Mis Facturas
                                            </button>
                                            <div id="Demo2" className="hide container">
                                                <p>Some other text..</p>
                                            </div>

                                            <button onclick="myFunction('Demo3')"
                                                className="button block theme-l1 left-align">
                                                <i className="fa fa-users fa-fw margin-right"></i>
                                                Mis Metodos de Pago
                                            </button>

                                            <div id="Demo3" className="hide container">
                                                <div className="row-padding">
                                                    <br />
                                                    <div className="half">
                                                        <img src="/w3images/lights.jpg"
                                                            style="width:100%"
                                                            className="margin-bottom" />
                                                    </div>
                                                    <div className="half">
                                                        <img src="/w3images/nature.jpg"
                                                            style="width:100%"
                                                            className="margin-bottom" />
                                                    </div>
                                                    <div className="half">
                                                        <img src="/w3images/mountains.jpg"
                                                            style="width:100%"
                                                            className="margin-bottom" />
                                                    </div>
                                                    <div className="half">
                                                        <img src="/w3images/forest.jpg"
                                                            style="width:100%"
                                                            className="margin-bottom" />
                                                    </div>
                                                    <div className="half">
                                                        <img src="/w3images/nature.jpg"
                                                            style="width:100%"
                                                            className="margin-bottom" />
                                                    </div>
                                                    <div className="half">
                                                        <img src="/w3images/snow.jpg"
                                                            style="width:100%"
                                                            className="margin-bottom" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <br />
                                   
                                    // Alertas 
                                    <div className="container display-container round border theme-border margin-bottom hide-small">
                                        <span onClick="this.parentElement.style.display='none'"
                                            className="button display-topright">
                                            <i className="fa fa-remove"></i>
                                        </span>
                                        <p><strong> Descubre!</strong></p>
                                        <p>  Nuevos productos que son tendencia </p>
                                    </div>                                
                                </ColumnaDerecha>
                                // Fin Columna Derecha 

                                // Columna Central 
                                <ColumnaCentral className="col m7">

                                    <div className="row-padding">
                                        <div className="col m12">
                                            <div className="card round white">
                                                <div className="container padding">
                                                    <h6 className="opacity"> Agregar contenido a tu muro </h6>
                                                    <p contenteditable="true"
                                                        className="border padding"> Escribe una nueva entrada </p>
                                                    <button type="button"
                                                        className="button theme">
                                                        <i className="fa fa-pencil"></i>
                                                        Publicar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container card white round margin">
                                        <br />
                                        <img src="/w3images/avatar2.png"
                                            alt="Avatar"
                                            className="left circle margin-right"
                                            style="width:60px" />
                                        <span className="right opacity">1 min</span>
                                        <h4>Michael Arias</h4>
                                        <br />
                                        <hr className="clear" />
                                        <p> Cerraduras .</p>
                                        <div className="row-padding" style="margin:0 -16px">
                                            <div className="half">
                                                <img src="/w3images/lights.jpg"
                                                    style="width:100%"
                                                    alt="Northern Lights"
                                                    className="margin-bottom" />
                                            </div>
                                            <div className="half">
                                                <img src="/w3images/nature.jpg"
                                                    style="width:100%" alt="Nature"
                                                    className="margin-bottom" />
                                            </div>
                                        </div>

                                        <button type="button"
                                            className="button theme-d1 margin-bottom">
                                            <i className="fa fa-thumbs-up"></i>
                                            Like </button>
                                        <button type="button"
                                            className="button theme-d2 margin-bottom">
                                            <i className="fa fa-comment"></i>
                                            Comentar </button>
                                    </div>                                                                    
                                </ColumnaCentral>
                                // Fin Columna Central 

                                // Columna Izquierda
                                <ColumnaIzquierda className="col m2">
                                    <div className="card round white center">
                                        <div className="container">
                                            <p> Carrito de compras:</p>
                                            <img src="/w3images/forest.jpg"
                                                alt="Forest" style="width:100%;" />
                                            <p><strong> Producto </strong></p>
                                            <p> Precio </p>
                                            <p><button className="button block theme-l4">
                                                Descripcion </button></p>
                                        </div>
                                        <div className="row opacity">
                                            <div className="half">
                                                <button className="button block green section"
                                                    title="Aceptar">
                                                    <i className="fa fa-check">
                                                    </i></button>
                                            </div>
                                            <div className="half">
                                                <button className="button block red section"
                                                    title="Rechazar">
                                                    <i className="fa fa-remove">
                                                    </i></button>
                                            </div>
                                        </div>
                                    </div>                                                                        
                                    <br />

                                    <div className="card round white padding-16 center">
                                        <p>ADS</p>
                                        <p><i className="fa fa-bug xxlarge"></i></p>
                                    </div>
                                    <br />                                    
                                </ColumnaIzquierda>
                                // Fin Columna Izquierda
                                
                            </ContenedorColumnas>
                            // End Grid 
                                                
                        </div>
                        <br />
                        // Final del Container de Perfil 


                        // Footer 
                        <footer className="container theme-d3 padding-16">
                            <h5> Agregar contenido al Footer</h5>
                        </footer>

                    </PerfilContent>
                </PerfilContainer>
            </PerfilStyled>    
        )
    }
    
    /*async function logout() {
        await firebase.logout()
        props.history.push('/')
    }*/
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    setUser,
    setLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);                                   