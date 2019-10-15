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
                            Confirmación de correo electrónico enviada: compruebe sus correos electrónicos 
                            (incluido carpeta de correo no deseado) para un correo electrónico de confirmación. 
                            Actualizar esta página una vez que haya confirmado su correo electrónico.
                        </p>
                    ) : (
                            <p>
                                Verifique su correo electrónico: Verifique sus correos electrónicos (carpeta de spam
                                incluido) para un correo electrónico de confirmación o enviar otro
                                email de confirmación.
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