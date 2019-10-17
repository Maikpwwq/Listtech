import React, { Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

const necesitaVerificacionEmail = autorizarUsuario =>
    autorizarUsuario &&
    !autorizarUsuario.emailVerified &&
    autorizarUsuario.providerData
        .map(provider => provider.providerId)
        .includes('clave');

class ConVerificacionEmail extends Component {
    constructor(props) {
        super(props);

        this.state = { isSent: false };
    }

    onSendEmailVerification = () => {
        this.props.firebase
            .doEnviarVerificacionEmail()
            .then(() => this.setState({ isSent: true }));
    };

    render() {
        return necesitaVerificacionEmail(this.props.autorizarUsuario) ? (
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
                    onClick={this.onEnviarVerificacionEmail}
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
    autorizarUsuario: state.estadoSesion.autorizarUsuario,
})

return compose(
    ConFirebase,
    connect(mapStateToProps),
)(ConVerificacionEmail);

export default ConVerificacionEmail;    