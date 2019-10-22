import React, { Component } from 'react';
//import { useestado } from 'react';
import logo from '../../imagenes/Listtech-Logo.png';

import { NavLink, withRouter } from 'react-router-dom';

import { ConFirebase } from '../administracion/Index-firebase';

import * as ROLES from '../administracion/Roles';

import { auth, database, facebookProvider, googleProvider } from '../../init-firebase.js'
import * as firebase from 'firebase/app';

/*import * as firebaseui from 'firebaseui'*/

import { connect } from 'react-redux';
import { setUsuario, setInicioSesion } from '../../actions/actions'

// import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'

/* Style Registro */
import styled from 'styled-components'

const Registro = styled.form`
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

const VisorRegistro = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #1c3643;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
`;

const SocialRegistro = styled.div`
    padding: 24px 32px 0px 32px;
    display: block;
`;

const RegistroConFacebook = styled.div`
    margin-bottom: 12px;
`;

const RegistroConGmail = styled.div`
    
`;

const RegistroDivision = styled.div`
    width: 82%;
    text-align: center;
    overflow: hidden;
    margin: 1rem auto;
`;

const RegistroConEmail = styled.div`
    
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

const BtnRegistro = styled.div`
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


const FooterInicioSesion = styled.div`
    
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

class PaginaRegistro extends Component {
    AutorizarUsuario
    constructor(props) {
        super(props);
        this.estado = {
            txtNombre : document.getElementById('txtNombre'),
            txtEmail : document.getElementById('txtEmail'),
            txtTelefono : document.getElementById('txtTelefono'),
            txtclave : document.getElementById('txtclave'),
            btnInicioSesion: document.getElementById('btnInicioSesion'),
            btnRegistro : document.getElementById('btnRegistro'),
            btnCerrarSesion: document.getElementById('btnCerrarSesion'),

        }
        this.RegistroConFacebook = this.RegistroConFacebook.bind(this);
        this.RegistroConGmail = this.RegistroConGmail.bind(this);
        this.SendForm = this.SendForm.bind(this);
        this.firebaseusuario = this.firebaseusuario.bind(this);
        this.onCambios = this.onCambios.bind(this);
        this.onEnviar = this.onEnviar.bind(this);      
    }

    RegistroConFacebook = () => {        
        this.props.firebase
            .doRegistrarseConFacebook()
            .then(socialAutorizarUsuario => {
                // Create a usuario in your Firebase Realtime Database too
                return

                this.props.firebase.usuario(socialAutorizarUsuario.usuario.uid).set({
                    usuarioname: socialAutorizarUsuario.additionalusuarioInfo.profile.name,
                    email: socialAutorizarUsuario.additionalusuarioInfo.profile.email,
                    roles: {},
                });
            })
            .then(({ usuario }) => {
                this.props.setUsuario(usuario);
                this.props.setInicioSesion(true);
                this.props.setToken = usuario.credential.accessToken;
                this.props.history.push('/perfil');
                console.log(usuario);
            })
            .then(() => {
                this.setestado({ error: null });
                this.props.history.push('/inicio/');
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setestado({ error });
            });

        event.preventDefault();
    };

    RegistroConGmail = () => {
        this.props.firebase
            .doRegistrarseConGmail()
            .then(socialAutorizarUsuario => {
                // Create a usuario in your Firebase Realtime Database too
                return

                this.props.firebase.usuario(socialAutorizarUsuario.usuario.uid).set({
                    usuarioname: socialAutorizarUsuario.additionalusuarioInfo.profile.name,
                    email: socialAutorizarUsuario.additionalusuarioInfo.profile.email,
                    roles: {},
                });
            })
            .then(({ usuario }) => {
                this.props.setusuario(usuario);
                this.props.setLogin(true);
                this.props.setToken = usuario.credential.accessToken;
                this.props.history.push('/perfil');
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

    firebaseUsuario = () => {
        auth().onAuthestadoChanged(this.firebaseUsuario)
        if (this.firebaseUsuario) {
            console.log(this.firebaseUsuario);
        }
        else {
            console.log('Sin iniciar sesión aun');
        }
    };

    onCambios = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (name === "telefono") {
            if (!Number(value)) {
                alert("Tu numero telefónico deben ser números");
            }
        }
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
            .doCrearUsuarioConEmailClave(email, claveUno)
            .then((AutorizarUsuario) => {
                // Create a usuario in your Firebase realtime database
                return this.props.firebase.usuario(AutorizarUsuario.usuario.uid).set({
                    usuarioname,
                    email,
                    roles,
                });
            })

            .then(() => {
                this.setestado({ ...ESTADO_REPOSO });
                this.props.history.push('/inicio/');
            })

            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setestado({ error });
            });

        const form = new FormData(event.target);
        const newDate = new Date().toISOString();
        // const [fotoPerfil, setFotoPerfil]  = useestado('');
        const usuario = {
            'fotoPerfil': this.props.usuario.photoURL,
            'usuarioContact': this.props.usuario.email,
            'usuarioName': this.props.usuario.displayName,
            'date': newDate,
            'nombre': form.get('nombre'),
            'email': form.get('email'),
            'telefono': form.get('telefono'),
            'clave': form.get('clave'),
        }

        database.ref('usuarios').push(usuario)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

    // Evento de Registro
    btnRegistro = ('click', (event) => {
        // Get Email and pass        
        const email = this.txtEmail.value;
        const clave = this.txtclave.value;
        // Sing up
        const promise = auth.crearUsuarioConEmailClave(email, clave);
        // firebase.register(nombre, email, telefono, clave)
        this.props.history.replace('/perfil')

        promise
            .catch(e => console.log(e.message));
    });    

    render() {
        const isInvalid =
            claveUno !== claveDos ||
            claveUno === '' ||
            email === '' ||
            usuarioname === '';


        return (
            <Registro
                onSubmit={this.onEnviar}
                action="/FormRegistro"
                method="post"
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
                <RegistroVista>
                    <Invitado
                        data-reactroot=""
                        data-reactid="1"
                        data-react-checksum="15">

                        <div
                            className="Loginv2-container"
                            data-reactid="2">

                            <RegistroSocial
                                data-reactid="3">

                                <RegistroConFacebook
                                    data-reactid="4">

                                    <button onClick={this.RegistroConFacebook}>
                                        <a href="/Registro/facebook/"
                                            className="btn-fcbk btn--big btn--responsive"
                                            data-reactid="5">
                                            <span class="icon--line icon-fcbk"
                                                data-reactid="6"></span>
                                            <span data-reactid="7"
                                            >Registrar con Facebook</span>
                                        </a></button>
                                </RegistroConFacebook>

                                <RegistroConGmail
                                    data-reactid="8">

                                    <button onClick={this.RegistroConGmail}>
                                        <a href="/Registro/gmail/"
                                            class="btn-twt btn--big btn--responsive "
                                            data-reactid="9">
                                            <span className="icon--line icon-twt"
                                                data-reactid="10">
                                            </span>
                                            <span data-reactid="11"
                                            >Registrar con Gmail</span>
                                        </a></button>
                                </RegistroConGmail>

                            </RegistroSocial>

                            <RegistroDivision data-reactid="12">
                                <span class="LoginDivider-text"
                                    data-reactid="13">
                                    <span data-reactid="14"
                                    >o</span>
                                </span>
                            </RegistroDivision>

                            <RegistroConEmail
                                data-reactid="15">
                                <form action="/inicioSesion/?next="
                                    method="post" data-reactid="16">
                                    <input type="hidden"
                                        name="csrfmiddlewaretoken"
                                        value=""
                                        data-reactid="17" />

                                    <FormInput
                                        data-reactid="18">
                                        <input type="text"
                                            name="nombre" required=""
                                            id="txtNombre"
                                            autocomplete="off"
                                            placeholder="Ingresa tu nombre completo"
                                            className="FormInput-field"
                                            value=""
                                            onChange={this.onCambios}
                                            data-reactid="19" />
                                        <label class="FormInput-label"
                                            data-reactid="20">
                                            <span data-reactid="21"
                                            >Tu nombre</span>
                                        </label>
                                        <p className="FormInput-error"
                                            data-reactid="22">
                                        </p>
                                    </FormInput>

                                    <FormInput
                                        data-reactid="23">
                                        <input type="email"
                                            name="email" required=""
                                            id="txtEmail"
                                            autocomplete="off"
                                            placeholder="Tu email"
                                            className="FormInput-field"
                                            value=""
                                            onChange={this.onCambios}
                                            data-reactid="24" />
                                        <label class="FormInput-label"
                                            data-reactid="25">
                                            <span data-reactid="26"
                                            >Tu email</span>
                                        </label>
                                        <p className="FormInput-error"
                                            data-reactid="27">
                                        </p>
                                    </FormInput>

                                    <FormInput
                                        data-reactid="28">
                                        <input type="number"
                                            name="telefono" required=""
                                            id="txtTelefono"
                                            autocomplete="off"
                                            placeholder="Tu numero celular"
                                            className="FormInput-field"
                                            value=""
                                            onChange={this.onCambios}
                                            data-reactid="29" />
                                        <label class="FormInput-label"
                                            data-reactid="30">
                                            <span data-reactid="31"
                                            >Tu numero movil</span>
                                        </label>
                                        <p className="FormInput-error"
                                            data-reactid="32">
                                        </p>
                                    </FormInput>

                                    <FormInput
                                        data-reactid="33">
                                        <input type="clave"
                                            name="clave"
                                            id="txtclave"
                                            required=""
                                            autocomplete="off"
                                            placeholder="Tu clave"
                                            className="FormInput-field"
                                            value=""
                                            onChange={this.onCambios}
                                            data-reactid="34" />
                                        <label className="FormInput-label"
                                            data-reactid="35">
                                            <span data-reactid="36"
                                            >Tu clave</span>
                                        </label><p className="FormInput-error"
                                            data-reactid="37">
                                        </p>
                                    </FormInput>

                                    <FormInput
                                        data-reactid="38">
                                        <input type="confirmarclave"
                                            name="confirmarclave"
                                            id="txtconfirmarclave"
                                            required=""
                                            autocomplete="off"
                                            placeholder="Confirma tu clave"
                                            className="FormInput-field"
                                            value=""
                                            onChange={this.onCambios}
                                            data-reactid="39" />
                                        <label className="FormInput-label"
                                            data-reactid="40">
                                            <span data-reactid="41"
                                            > Repite Tu clave</span>
                                        </label><p className="FormInput-error"
                                            data-reactid="42">
                                        </p>
                                    </FormInput>

                                    <ButtonRegistro
                                        data-reactid="43"
                                        disabled={isInvalid}
                                        type="submit"
                                    >
                                        <span data-reactid="44"
                                            id="btnRegistro"
                                            type="submit"
                                            onClick={this.btnRegistro}
                                        >Registrarse</span>
                                    </ButtonRegistro>

                                </form>

                                {error && <p>{error.message}</p>}

                            </RegistroConEmail>

                            <FooterInicioSesion data-reactid="45">
                                <div class="AccountFooter-create"
                                    data-reactid="46">
                                    <span data-reactid="47"
                                    >¿Ya tienes una cuenta con nosotros?, accede a tu cuenta</span>
                                </div>
                                <div class="AccountFooter-link"
                                    data-reactid="48">
                                    <a href="/inicioSesion/"
                                        component={NavLink}
                                        to="/inicioSesion/"
                                        className="AccountFooter-btn"
                                        data-reactid="49">
                                        <span data-reactid="50"
                                        >Iniciar Sesion
                                    </span>
                                    </a>
                                </div>
                            </FooterInicioSesion>
                        </div>
                    </Invitado>
                </RegistroVista>
            </Registro>
    )};
}

const mapDispatchToProps = {
    setUsuario,
    setInicioSesion,
}

export default connect(null, mapDispatchToProps)(PaginaRegistro);

const RegistroLink = () => (
    <p>
        No tiene aun una cuenta? <Link to="/registro/"> Registrase</Link>
    </p>
);

const FormRegistro =
    withRouter(ConFirebase(
        FormRegistro)
    );

export { FormRegistro, RegistroLink };