import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ConFirebase } from '../administracion/Index-firebase';

import * as ROUTES from '../../rutas/App.js';

const ConAutorizacion = condition => Component => {
    class ConAutorizacion extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
                () => this.props.history.push(ROUTES.SIGN_IN),
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return condition(this.props.authUser) ? (
                <Component {...this.props} />
            ) : null;
        }
    }

    const mapStateToProps = state => ({
        authUser: state.sessionState.authUser,
    });

    return compose(
        withRouter,
        ConFirebase,
        connect(mapStateToProps),
    )(ConAutorizacion);
};

export default ConAutorizacion;