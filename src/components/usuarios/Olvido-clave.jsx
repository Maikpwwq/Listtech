import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ConFirebase } from '../administracion/Index-firebase';
import * as ROUTES from '../../rutas/App.js';

const PaginaClaveOlvidada = () => (
    <div>
        <h1>Olvido la clave</h1>
        <FormClaveOlvidada />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class FormClaveOlvidadaBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doRestablecerClave(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email"
                />
                <button disabled={isInvalid} type="submit">
                    Restablecer mi clave
        </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const ClaveOlvidadaLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Olvido su contrasena?</Link>
    </p>
);

const FormClaveOlvidada = ConFirebase(FormClaveOlvidadaBase);

export default PaginaClaveOlvidada;

export { FormClaveOlvidada, ClaveOlvidadaLink };