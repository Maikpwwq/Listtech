import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

const necesitaEmailVerificacion = authUser =>
    authUser &&
    !authUser.emailVerified &&
    authUser.providerData
        .map(provider => provider.providerId)
        .includes('clave');

const ConVerificacionEmail = Component => {
    class ConVerificacionEmail extends React.Component {
        constructor(props) {
            super(props);

            this.state = { isSent: false };
        }

        onSendEmailVerification = () => {
            this.props.firebase
                .doEnviarEmailVerificacion()
                .then(() => this.setState({ isSent: true }));
        };

        render() {
            return necesitaEmailVerificacion(this.props.authUser) ? (
                <div>
                    {this.state.isSent ? (
                        <p>
                            Confirmaci�n de correo electr�nico enviada: compruebe sus correos electr�nicos 
                            (incluido carpeta de correo no deseado) para un correo electr�nico de confirmaci�n. 
                            Actualizar esta p�gina una vez que haya confirmado su correo electr�nico.
                        </p>
                    ) : (
                            <p>
                                Verifique su correo electr�nico: Verifique sus correos electr�nicos (carpeta de spam
                                incluido) para un correo electr�nico de confirmaci�n o enviar otro
                                email de confirmaci�n.
                            </p>
                        )}

                    <button
                        type="button"
                        onClick={this.onEnviarEmailVerificacion}
                        disabled={this.state.isSent}
                    >
                        Enviar E-Mail de confirmacion 
                    </button>

                </div>
            ) : (
                    <Component {...this.props} />
                );
        }
    }

    const mapStateToProps = state => ({
        authUser: state.sessionState.authUser,
    });

    return compose(
        ConFirebase,
        connect(mapStateToProps),
    )(ConVerificacionEmail);
};

export default ConVerificacionEmail;