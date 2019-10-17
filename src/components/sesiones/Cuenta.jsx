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

const AccountPage = ({ autorizarUsuario }) => (
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
            activeSignInMethods: [],
            error: null,
        };
    }

    componentDidMount() {
        this.fetchSignInMethods();
    }

    fetchSignInMethods = () => {
        this.props.firebase.auth
            .fetchSignInMethodsForEmail(this.props.autorizarUsuario.email)
            .then(activeSignInMethods =>
                this.setState({ activeSignInMethods, error: null }),
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
        const { activeSignInMethods, error } = this.state;

        return (
            <div>
                Sign In Methods:
        <ul>
                    {SIGN_IN_METHODS.map(signInMethod => {
                        const onlyOneLeft = activeSignInMethods.length === 1;
                        const isEnabled = activeSignInMethods.includes(
                            signInMethod.id,
                        );

                        return (
                            <li key={signInMethod.id}>
                                {signInMethod.id === 'clave' ? (
                                    <DefaultLoginToggle
                                        onlyOneLeft={onlyOneLeft}
                                        isEnabled={isEnabled}
                                        signInMethod={signInMethod}
                                        onLink={this.onDefaultLoginLink}
                                        onUnlink={this.onUnlink}
                                    />
                                ) : (
                                        <SocialLoginToggle
                                            onlyOneLeft={onlyOneLeft}
                                            isEnabled={isEnabled}
                                            signInMethod={signInMethod}
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
    signInMethod,
    onLink,
    onUnlink,
}) =>
    isEnabled ? (
        <button
            type="button"
            onClick={() => onUnlink(signInMethod.id)}
            disabled={onlyOneLeft}
        >
            Deactivate {signInMethod.id}
        </button>
    ) : (
            <button
                type="button"
                onClick={() => onLink(signInMethod.provider)}
            >
                Link {signInMethod.id}
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
            signInMethod,
            onUnlink,
        } = this.props;

        const { claveUno, claveDos } = this.state;

        const isInvalid =
            claveUno !== claveDos || claveUno === '';

        return isEnabled ? (
            <button
                type="button"
                onClick={() => onUnlink(signInMethod.id)}
                disabled={onlyOneLeft}
            >
                Deactivate {signInMethod.id}
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
                        Link {signInMethod.id}
                    </button>
                </form>
            );
    }
}

const LoginManagement = ConFirebase(LoginManagementBase);

const mapStateToProps = state => ({
    autorizarUsuario: state.estadoSesion.autorizarUsuario,
});

const condition = autorizarUsuario => !!autorizarUsuario;

export default compose(
    connect(mapStateToProps),
    ConVerificacionEmail,
    ConAutorizacion(condition),
)(AccountPage);
