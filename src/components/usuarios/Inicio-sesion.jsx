import React, { Component } from 'react';
//import { useState } from 'react';

import logo from '../../imagenes/Listtech-Logo.png';
import { NavLink } from 'react-router-dom';

import Firebase from '../../init-firebase.js'
import { auth, database, facebookProvider, googleProvider } from '../../init-firebase.js'

/*import * as firebaseui from 'firebaseui'*/

import { connect } from 'react-redux';
import { setUsuario, setInicioSesion } from '../../actions/actions'

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { RegistroLink } from '../Registro.jsx';
import { OlvidoClaveLink } from '../OlvidoClave';
import { ConFirebase } from '../administracion/Index-firebase';
import * as ROUTES from '../../rutas/App.js';

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

const ButtonIniciar = styled.div`
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
    // The email of the user's account used.
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

class FormInicioSesion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtEmail : document.getElementById('txtEmail'),
            txtPassword : document.getElementById('txtPassword'),
            btnLogin : document.getElementById('btnLogin'),
            btnRegistro : document.getElementById('btnRegistro'),
            btnLogout : document.getElementById('btnLogout'),
            email: '',
            password: '',
            error: null,
        }


        this.iniciarSesionConFacebook = this.iniciarSesionConFacebook.bind(this);
        this.iniciarSesionConGmail = this.iniciarSesionConGmail.bind(this);
        this.EnviarForm = this.EnviarForm.bind(this);
        this.onCambios = this.onCambios.bind(this);
        this.onCargar = this.onCargar.bind(this);
        this.onEnviar = this.onEnviar.bind(this);       

    }

    // { setUsuario, setInicioSesion }

    iniciarSesionConFacebook = (event) => {
        this.props.firebase
            .doIniciarSesionConFacebook()
            .then(socialAuthUser => {
                // Create a user in your Firebase Realtime Database too
                return

                this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.additionalUserInfo.profile.name,
                    email: socialAuthUser.additionalUserInfo.profile.email,
                    roles: {},
                });
            })
            .then(({ user }) => {
                this.props.setUser(user);
                this.props.setLogin(true);
                this.props.setToken = user.credential.accessToken;
                this.props.history.push('/perfil');
                console.log(user);
            })
            .then(() => {
                this.setState({ error: null });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({ error });
            });

        event.preventDefault();      
    };

    iniciarSesionConGmail = (event) => {
        this.props.firebase
            .doIniciarSesionConGmail()
            .then(socialAuthUser => {
                // Create a user in your Firebase Realtime Database too
                return

                this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.additionalUserInfo.profile.name,
                    email: socialAuthUser.additionalUserInfo.profile.email,
                    roles: {},
                });
            })
            .then(({ user }) => {
                this.props.setUser(user);
                this.props.setLogin(true);
                this.props.setToken = user.credential.accessToken;
                this.props.history.push('/perfil');
                console.log(user);
            })
            .then(() => {
                this.setState({ error: null });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({ error });
            });

        event.preventDefault();
    };
    
    onCambios = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;        
        // El evento altera los datos guardados 
        this.setState({
            [name]: value
        });
        console.log(this.state, 'Escribiendo ...');
    }; 

    onEnviar = (event) => {
        //Previene que el formulario recargue la pagina
        event.preventDefault(); 
        console.log(this.state, 'Enviando la data ...');
        alert('Se envio correctamente su solicitud: ' + this.state.value);

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();
        // const [fotoPerfil, setFotoPerfil] = useState('');
        const usuario = {
            'fotoPerfil': this.props.user.photoURL,
            'userContact': this.props.user.email,
            'userName': this.props.user.displayName,
            'date': newDate,
            'nombre': form.get('nombre'),
            'email': form.get('email'),
            'telefono': form.get('telefono'),
            'password':form.get('password'),
        }

        database.ref('Usuarios').push(usuario)
            .then(response => console.log(response))
            .catch(error=> console.log(error))
    };    

    // Evento Iniciar Sesion    
    btnIniciarSesion = ('click', (event) => {
        // Get Email and pass
        const email = this.txtEmail.value;
        const pass = this.txtPassword.value;
        // Sing in
        const promise = auth.singInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Evento de Registro
    btnRegistro = ('click', (event) => {
        this.props.history.replace('/registro')
        .catch(e => console.log(e.message));
    });

    //<!--  -->
    render() {

        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

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
                                        <a href="/iniciarSesion/facebook/"
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
                                        <a href="/iniciarSesion/gmail/"
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
                                <form action="/iniciarSesion/?next="
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
                                        <input type="password"
                                            name="password"
                                            required=""
                                            autocomplete="off"
                                            placeholder="Tu contraseña"
                                            className="FormInput-field"
                                            value=""
                                            Id="txtPassword"
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

                                    <ButtonIniciar data-reactid="28"
                                        disabled={isInvalid}
                                        type="submit"
                                    >
                                        <span data-reactid="29"
                                            Id="btnIniciarSesion"
                                        >Inicia sesión</span>
                                    </ButtonIniciar>

                                    <div className="IniciarSesionConEmail-lostpassword"
                                        data-reactid="30">
                                        <a href="/password/reset/"
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
                                    <a href="/registro/"
                                        className="AccountFooter-btn"
                                        Id="btnRegistro"
                                        component={NavLink}
                                        to="/Registro"
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
    setUser,
    setLogin,
}

export default connect(null, mapDispatchToProps)(FormInicioSesion);

const FormInicioSesion = compose(
    withRouter,
    ConFirebase,
)(FormInicioSesion);

const InicioSesionConGoogle = compose(
    withRouter,
    ConFirebase,
)(inicioSesionConGoogle);

const InicioSesionConFacebook = compose(
    withRouter,
    ConFirebase,
)(inicioSesionConFacebook);

export default PaginaInicioSesion;

export { FormInicioSesion, InicioSesionConGoogle, InicioSesionConFacebook };