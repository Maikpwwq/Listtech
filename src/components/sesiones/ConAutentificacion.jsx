import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

const ConAutentificacion = Component => {
  class ConAutentificacion extends React.Component {
    constructor(props) {
      super(props);

      this.props.onSetAutorizarUsuario(
        JSON.parse(localStorage.getItem('autorizarUsuario')),
      );
    }

    componentDidMount() {
      this.listener = this.props.firebase.onautorizarUsuarioListener(
        autorizarUsuario => {
          localStorage.setItem('autorizarUsuario', JSON.stringify(autorizarUsuario));
          this.props.onSetAutorizarUsuario(autorizarUsuario);
        },
        () => {
          localStorage.removeItem('autorizarUsuario');
          this.props.onSetAutorizarUsuario(null);
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetAutorizarUsuario: autorizarUsuario =>
        dispatch({ type: 'SET_AUTORIZAR_USUARIO', autorizarUsuario }),
  });

  return compose(
    ConFirebase,
    connect(
      null,
      mapDispatchToProps,
    ),
  )(ConAutentificacion);
};

export default ConAutentificacion;