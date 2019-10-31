import React, { Component} from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

class ConAutorizacion extends Component {

    constructor(props) {
        super(props);
        this.estado = {
            
        }

        this.condicion = this.condicion.bind(this);     
    };   

    componentDidMount() {
        this.listener = this.props.firebase.onAutorizarUsuarioListener(
            autorizarUsuario => {
                if (!condicion(autorizarUsuario)) {
                    this.props.history.push('/inicioSesion/');
                }
            },
            () => this.props.history.push('/inicioSesion/'),
        );
    };

    componentWillUnmount() {
        this.listener();
    };

    render() {
        return condicion(this.props.autorizarUsuario) ? (
            <Component {...this.props} />
        ) : null;
    };
};


const mapStateToProps = estado => ({
    autorizarUsuario: estado.estadoSesion.autorizarUsuario,
});

export default compose(
    withRouter, ConFirebase,
    connect(mapStateToProps),
)(ConAutorizacion);