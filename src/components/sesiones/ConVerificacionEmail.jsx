import React, { Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

const necesitaVerificacionEmail = (autorizarUsuario) => {
    autorizarUsuario &&
    !autorizarUsuario.emailVerificado &&
    autorizarUsuario.providerData
        .map(provider => provider.providerId)
        .includes('clave');
};

class ConVerificacionEmail extends Component {
    constructor(props) {
        super(props);

        this.estado = {
            isSent: false
        };

    }

    onSendEmailVerification = () => {
        this.props.firebase
            .doEnviarVerificacionEmail()
            .then(() => this.setEstado({ isSent: true }));
    };

    render() {

        return (

            necesitaVerificacionEmail(this.props.autorizarUsuario) ? (

                <div>

                    {this.estado.isSent ? (
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
                        disabled={this.estado.isSent}
                    >Enviar E-Mail de confirmacion
                    </button>

                </div>                     

            ) : (

                <Component {...this.props} />
            )
        )
    };
};

const mapStateToProps = estado => ({
    autorizarUsuario: estado.estadoSesion.autorizarUsuario,
});
    
export default compose(
    ConFirebase,
    connect(mapStateToProps)(ConVerificacionEmail));    