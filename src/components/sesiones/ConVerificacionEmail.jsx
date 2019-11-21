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