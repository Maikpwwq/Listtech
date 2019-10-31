import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter, NavLink } from 'react-router-dom';
import { compose } from 'recompose';

// imagenes
import logo from '../../imagenes/Listtech-Logo.png';

// Firebase
import Firebase from '../../init-firebase.js'
import { auth, database } from '../../init-firebase.js' //facebookProvider, googleProvider 
/*import * as firebaseui from 'firebaseui'*/

import { setUsuario, setInicioSesion } from '../../actions/actions'

// Cargar Paginas 

import { RegistroLink } from './Registro.jsx';
import { OlvidoClaveLink } from './Olvido-clave.jsx';
import { ConFirebase } from '../administracion/Index-firebase';

import styled from 'styled-components'

/* Style InicioSesion */
const FormIniciarSesion = styled.div`
    text-align: center;
    box-sizing: border-box;
    display: block;
`;

const HeaderMenu = styled.div`
    background: linear-gradient(to right, #1c3643 0%, #273b47 25%, #1e5372 100%);
    padding: 0 15px;
    position: relative;
    z-index: 2;
`;

const Invitado = styled.div`
    grid-template-columns: minmax(auto, 405px);
    background-color: #fff;
    width: 376px;
    margin: 0 auto;
    -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08);
    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08)
`;

const IniciarSesionVisor = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #1c3643;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
`;

const IniciarSocial = styled.div`
    padding: 24px 32px 0px 32px;
    display: block;
`;

const IniciarSesionConFacebook = styled.div`
    margin-bottom: 12px;
`;

const IniciarSesionConGmail = styled.div`
    
`;

const IniciarSesionDivision = styled.div`
    width: 82%;
    text-align: center;
    overflow: hidden;
    margin: 1rem auto;
`;

const IniciarSesionConEmail = styled.form`
    
`;

const FormInput = styled.div`

    .input{
    border: 1px solid #c9c9c9;
    padding: 20px 12px;
    font - size: 1rem;
    -webkit - border - radius: 0.25rem;
    border - radius: 0.25rem;
    -webkit - transition: 0.2s border - color;   
    transition: 0.2s border - color;
    background - color: #fff;
    }    
`;

const BtnIniciar = styled.div`
    background: -webkit - linear - gradient(right, #95ca3e 0 %, #95ca3e 50 %, #85c638 100 %);  
    -webkit-box-shadow: 0 1px 1px 0 #58902d;
    box-shadow: 0 1px 1px 0 #58902d;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    padding: 8px 0.8em 6px 0.8em;
    transition: 0.2s;
    vertical-align: middle;
`;


const FooterRegistro = styled.div`
    
`;

 /* .catch (({ error }) => {
    // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
    // The email of the usuario's account used.
     var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
     var credential = error.credential;
    // ...
})*/

const ERROR_CODE_ACCOUNT_EXISTS =
    'la-cuenta-existe-con-diferentes-credenciales';

const ERROR_MSG_ACCOUNT_EXISTS = `
  Una cuenta con una dirección de correo electrónico para
  este perfil social ya existe. Intente iniciar sesión desde
  esta cuenta y asociar sus cuentas en su página de perfil.
`;

class PaginaInicioSesion extends Component {

    constructor(props) {
        super(props);
        this.estado = {
            txtEmail : document.getElementById('txtEmail'),
            txtClave: document.getElementById('txtClave'),

            txtNombre: document.getElementById('txtNombre'),
            txtEmail: document.getElementById('txtEmail'),
            txtTelefono: document.getElementById('txtTelefono'),
           
            fotoPerfil: this.props.usuario.photoURL,
            usuarioContacto: this.props.usuario.email,
            usuarioName: this.props.usuario.displayName,
            date: 'newDate',
            nombre: 'nombre',
            email: 'email',
            telefono: 'telefono',
            clave: 'clave',

            btnInicioSesion : document.getElementById('btnInicioSesion'),
            btnRegistro : document.getElementById('btnRegistro'),
            btnCerrarSesion: document.getElementById('btnCerrarSesion'),
           
            error: null,
        }


        this.inicioSesionConFacebook = this.inicioSesionConFacebook.bind(this);
        this.inicioSesionConGmail = this.inicioSesionConGmail.bind(this);
        this.EnviarForm = this.EnviarForm.bind(this);
        this.onCambios = this.onCambios.bind(this);
        this.onCargar = this.onCargar.bind(this);
        this.onEnviar = this.onEnviar.bind(this);       

    }

    // { setUsuario, setInicioSesion }

    inicioSesionConFacebook = (event) => {
        this.props.firebase
            .doInicioSesionConFacebook()
            .then(socialAutorizarUsuario => {
                // Create a usuario in your Firebase Realtime Database too
                return

                this.props.firebase.usuario(socialAutorizarUsuario.usuario.uid).set({
                    usuarioname: socialAutorizarUsuario.additionalUsuarioInfo.profile.name,
                    email: socialAutorizarUsuario.additionalUsuarioInfo.profile.email,
                    roles: {},
                });
            })
            .then(({ usuario }) => {
                this.props.setUsuario(usuario);
                this.props.setInicioSesion(true);
                this.props.setToken = usuario.credential.accessToken;
                this.props.history.push('/perfil/');
                console.log(usuario);
            })
            .then(() => {
                this.setEstado({ error: null });
                this.props.history.push('/inicio/');
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setEstado({ error });
            });

        event.preventDefault();      
    };

    inicioSesionConGmail = (event) => {
        this.props.firebase
            .doInicioSesionConGmail()
            .then(socialAutorizarUsuario => {
                // Create a usuario in your Firebase Realtime Database too
                return

                this.props.firebase.usuario(socialAutorizarUsuario.usuario.uid).set({
                    usuarioname: socialAutorizarUsuario.additionalUsuarioInfo.profile.name,
                    email: socialAutorizarUsuario.additionalUsuarioInfo.profile.email,
                    roles: {},
                });
            })
            .then(({ usuario }) => {
                this.props.setUsuario(usuario);
                this.props.setInicioSesion(true);
                this.props.setToken = usuario.credential.accessToken;
                this.props.history.push('/perfil/');
                console.log(usuario);
            })
            .then(() => {
                this.setEstado({ error: null });
                this.props.history.push('/inicio/');
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setEstado({ error });
            });

        event.preventDefault();
    };
    
    onCambios = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;        
        // El evento altera los datos guardados 
        this.setEstado({
            [name]: value
        });
        console.log(this.estado, 'Escribiendo ...');
    }; 

    onEnviar = (event) => {
        //Previene que el formulario recargue la pagina
        event.preventDefault(); 
        console.log(this.estado, 'Enviando la data ...');
        alert('Se envio correctamente su solicitud: ' + this.estado.value);

        this.props.firebase
            .doInicioSesionConEmailClave(email, clave)
            .then(() => {
                this.setEstado({ ...ESTADO_REPOSO });
                this.props.history.push('/inicio/');
            })
            .catch(error => {
                this.setEstado({ error });
            });
        
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();
        // const [fotoPerfil, setFotoPerfil] = useestado('');
        const usuario = {
            'fotoPerfil': this.props.usuario.photoURL,
            'usuarioContact': this.props.usuario.email,
            'usuarioName': this.props.usuario.displayName,
            'date': newDate,
            'nombre': form.get('nombre'),
            'email': form.get('email'),
            'telefono': form.get('telefono'),
            'clave':form.get('clave'),
        }

        database.ref('Usuarios').push(usuario)
            .then(response => console.log(response))
            .catch(error=> console.log(error))
    };    

    // Evento Iniciar Sesion    
    btnInicioSesion = ('click', (event) => {
        // Get Email and pass
        const email = this.txtEmail.value;
        const clave = this.txtClave.value;
        // Sing in
        const promise = auth.inicioSesionConEmailClave(email, clave);
        promise.catch(e => console.log(e.message));
    });

    // Evento de Registro
    btnRegistro = ('click', (event) => {
        this.props.history.replace('/registro/')
        .catch(e => console.log(e.message));
    });

    //<!--  -->
    render() {

        const { email, clave, error } = this.estado;

        const isInvalid = clave === '' || email === '';

        return (
            <FormIniciarSesion
                onSubmit={this.onEnviar}
            >
                <header id="header">
                    <div class="Header-container u-wrapper u-clearfix">
                        <HeaderMenu>
                            <a href="/" title="Listtech.com.co" className="Header-logo">
                                <img src={logo}
                                    alt="Listtech.com.co"
                                    width="90"
                                    height="90" />
                            </a>
                        </HeaderMenu>
                    </div>
                </header>
                <IniciarSesionVisor>

                    <Invitado
                        data-reactroot=""
                        data-reactid="1"
                        data-react-checksum="15">
                        <div className="Loginv2-container"
                            data-reactid="2">

                            <IniciarSocial
                                data-reactid="3">

                                <IniciarSesionConFacebook
                                    data-reactid="4">
                                    <button onClick={this.iniciarSesionConFacebook}>
                                        <a href="/inicioSesion/facebook/"
                                            className="btn-fcbk btn--big btn--responsive"
                                            data-reactid="5">
                                            <span class="icon--line icon-fcbk"
                                                data-reactid="6"></span>
                                            <span data-reactid="7"
                                            >Inicia sesión con Facebook</span>
                                        </a></button>
                                </IniciarSesionConFacebook>

                                <IniciarSesionConGmail
                                    data-reactid="8">
                                    <button onClick={this.iniciarSesionConGmail}>
                                        <a href="/inicioSesion/gmail/"
                                            class="btn-twt btn--big btn--responsive"
                                            data-reactid="9">
                                            <span className="icon--line icon-twt"
                                                data-reactid="10">
                                            </span>
                                            <span data-reactid="11"
                                            >Inicia sesión con Gmail</span>
                                        </a></button>
                            </IniciarSesionConGmail>

                            </IniciarSocial>

                            <IniciarSesionDivision
                                data-reactid="12">
                                <span class="LoginDivider-text"
                                    data-reactid="13">
                                    <span
                                        data-reactid="14"
                                    >o</span>
                                </span>
                            </IniciarSesionDivision>

                            <IniciarSesionConEmail
                                data-reactid="15"
                                onSubmit={this.onEnviar}
                                action="/FormAcceso"
                                method="post"
                            >
                                <form action="/inicioSesion/?next="
                                    method="post" data-reactid="16">

                                    <input type="hidden"
                                        name="csrfmiddlewaretoken"
                                        value=""
                                        data-reactid="17"
                                    />

                                    <FormInput
                                        data-reactid="18">
                                        <input type="email"
                                            name="email" required=""
                                            autocomplete="off"
                                            placeholder="Tu email"
                                            className="FormInput-field"
                                            value=""
                                            Id="txtEmail"
                                            onChange={this.onCambios}
                                            data-reactid="19" />
                                        <label class="FormInput-label"
                                            data-reactid="20">
                                            <span data-reactid="21"
                                            >Tu email</span>
                                        </label>
                                        <p className="FormInput-error"
                                            data-reactid="22">
                                        </p>
                                    </FormInput>


                                    <FormInput
                                        data-reactid="23">
                                        <input type="clave"
                                            name="clave"
                                            required=""
                                            autocomplete="off"
                                            placeholder="Tu contraseña"
                                            className="FormInput-field"
                                            value=""
                                            Id="txtclave"
                                            onChange={this.onCambios}
                                            data-reactid="24" />
                                        <label className="FormInput-label"
                                            data-reactid="25">
                                            <span data-reactid="26"
                                            >Tu contraseña</span>
                                        </label><p className="FormInput-error"
                                            data-reactid="27">
                                        </p>
                                    </FormInput>

                                    <BtnIniciar data-reactid="28"
                                        disabled={isInvalid}
                                        type="submit"
                                    >
                                        <span data-reactid="29"
                                            Id="btnIniciarSesion"
                                        >Inicia sesión</span>
                                    </BtnIniciar>

                                    <div className="IniciarSesionConEmail-lostclave"
                                        data-reactid="30">
                                        <a href="/olvidoClave/"
                                            data-reactid="31">
                                            <span data-reactid="32">
                                                ¿Olvidaste tu contraseña?
                                        </span> <OlvidoClaveLink/>
                                        </a>
                                    </div>
                                </form>

                                {error && <p>{error.message}</p>}

                            </IniciarSesionConEmail>
                            

                            <FooterRegistro data-reactid="33">
                                <div class="AccountFooter-create"
                                    data-reactid="34">
                                    <span data-reactid="35"
                                    >¿Aún no tienes cuenta?, Crea una nueva
                                        </span> 
                                </div>

                                <div class="AccountFooter-link"
                                    data-reactid="36">
                                    <a 
                                        className="AccountFooter-btn"
                                        Id="btnRegistro"
                                        component={NavLink}
                                        to="/registro/"
                                        data-reactid="37">
                                        <span data-reactid="38"
                                        >Regístrate
                                    </span> <RegistroLink />
                                    </a>
                                </div>
                            </FooterRegistro>

                        </div>
                    </Invitado>
                </IniciarSesionVisor>
            </FormIniciarSesion>
        )
    };
}

const mapDispatchToProps = {
    setUsuario,
    setInicioSesion,
}

export default connect(null, mapDispatchToProps)(PaginaInicioSesion);

/* const PaginaInicioSesion = compose(
    withRouter,
    ConFirebase,
)(PaginaInicioSesion); */

const InicioSesionConGmail = compose(
    withRouter,
    ConFirebase,
)(inicioSesionConGmail);

const InicioSesionConFacebook = compose(
    withRouter,
    ConFirebase,
)(inicioSesionConFacebook);

export { InicioSesionConGmail, InicioSesionConFacebook }; // PaginaInicioSesion