import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConAutorizacion, ConVerificacionEmail } from './Sesion';
import { ConFirebase } from '../administracion/Index-firebase';
import { FormOlvidoClave } from '../usuarios/Olvido-clave';
import { FormCambioClave } from '../usuarios/Cambio-clave';

const SIGN_IN_METHODS = [
    {
        id: 'clave',
        provider: null,
    },
    {
        id: 'google.com',
        provider: 'googleProvider',
    },
    {
        id: 'facebook.com',
        provider: 'facebookProvider',
    },
];

const PaginaCuenta = ({ autorizarUsuario }) => (
    <div>
        <h1>Account: {autorizarUsuario.email}</h1>
        <FormOlvidoClave />
        <FormCambioClave />
        <LoginManagement autorizarUsuario={autorizarUsuario} />
    </div>
);

class LoginManagementBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            metodosActivosInicioSesion: [],
            error: null,
        };
    }

    componentDidMount() {
        this.fetchSignInMethods();
    }

    fetchSignInMethods = () => {
        this.props.firebase.auth
            .fetchSignInMethodsForEmail(this.props.autorizarUsuario.email)
            .then(metodosActivosInicioSesion =>
                this.setState({ metodosActivosInicioSesion, error: null }),
            )
            .catch(error => this.setState({ error }));
    };

    onSocialLoginLink = provider => {
        this.props.firebase.auth.currentUser
            .linkWithPopup(this.props.firebase[provider])
            .then(this.fetchSignInMethods)
            .catch(error => this.setState({ error }));
    };

    onDefaultLoginLink = clave => {
        const credential = this.props.firebase.emailAuthProvider.credential(
            this.props.autorizarUsuario.email,
            clave,
        );

        this.props.firebase.auth.currentUser
            .linkAndRetrieveDataWithCredential(credential)
            .then(this.fetchSignInMethods)
            .catch(error => this.setState({ error }));
    };

    onUnlink = providerId => {
        this.props.firebase.auth.currentUser
            .unlink(providerId)
            .then(this.fetchSignInMethods)
            .catch(error => this.setState({ error }));
    };

    render() {
        const { metodosActivosInicioSesion, error } = this.state;

        return (
            <div>
                Metodos Inicio Sesion:
        <ul>
                    {SIGN_IN_METHODS.map(MetodoInicioSesion => {
                        const onlyOneLeft = metodosActivosInicioSesion.length === 1;
                        const isEnabled = metodosActivosInicioSesion.includes(
                            metodosInicioSesion.id,
                        );

                        return (
                            <li key={metodosInicioSesion.id}>
                                {metodosInicioSesion.id === 'clave' ? (
                                    <DefaultLoginToggle
                                        onlyOneLeft={onlyOneLeft}
                                        isEnabled={isEnabled}
                                        metodosInicioSesion={metodosInicioSesion}
                                        onLink={this.onDefaultLoginLink}
                                        onUnlink={this.onUnlink}
                                    />
                                ) : (
                                        <SocialLoginToggle
                                            onlyOneLeft={onlyOneLeft}
                                            isEnabled={isEnabled}
                                            metodosInicioSesion={metodosInicioSesion}
                                            onLink={this.onSocialLoginLink}
                                            onUnlink={this.onUnlink}
                                        />
                                    )}
                            </li>
                        );
                    })}
                </ul>
                {error && error.message}
            </div>
        );
    }
}

const SocialLoginToggle = ({
    onlyOneLeft,
    isEnabled,
    metodosInicioSesion,
    onLink,
    onUnlink,
}) =>
    isEnabled ? (
        <button
            type="button"
            onClick={() => onUnlink(metodosInicioSesion.id)}
            disabled={onlyOneLeft}
        >
            Deactivate {metodosInicioSesion.id}
        </button>
    ) : (
            <button
                type="button"
                onClick={() => onLink(metodosInicioSesion.provider)}
            >
                Link {metodosInicioSesion.id}
            </button>
        );

class DefaultLoginToggle extends Component {
    constructor(props) {
        super(props);

        this.state = { claveOne: '', claveTwo: '' };
    }

    onEnviar = event => {
        event.preventDefault();

        this.props.onLink(this.state.claveOne);
        this.setState({ claveOne: '', claveTwo: '' });
    };

    onCambio = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            onlyOneLeft,
            isEnabled,
            metodosInicioSesion,
            onUnlink,
        } = this.props;

        const { claveUno, claveDos } = this.state;

        const isInvalid =
            claveUno !== claveDos || claveUno === '';

        return isEnabled ? (
            <button
                type="button"
                onClick={() => onUnlink(metodosInicioSesion.id)}
                disabled={onlyOneLeft}
            >
                Deactivate {metodosInicioSesion.id}
            </button>
        ) : (
                <form onSubmit={this.onEnviar}>
                    <input
                        name="claveUno"
                        value={claveUno}
                        onChange={this.onCambio}
                        type="clave"
                        placeholder="Nueva Clave"
                    />
                    <input
                        name="claveDos"
                        value={claveDos}
                        onChange={this.onCambio}
                        type="clave"
                        placeholder="Confirmar Nueva clave"
                    />

                    <button disabled={isInvalid} type="submit">
                        Link {metodosInicioSesion.id}
                    </button>
                </form>
            );
    }
}

const LoginManagement = ConFirebase(LoginManagementBase);

const mapStateToProps = state => ({
    autorizarUsuario: state.estadoSesion.autorizarUsuario,
});

const condicion = autorizarUsuario => !!autorizarUsuario;

export default compose(
    connect(mapStateToProps),
    ConVerificacionEmail,
    ConAutorizacion(condicion),
)(PaginaCuenta);
