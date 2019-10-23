import React, from 'react';

import { connect } from 'react-redux';
import classNames from 'classnames';

function Modal(props) {

    const ModalClass =
        classNames('Modal-wrapper', (event) => {
            mostrarModal: props.mostrar
    });

    return (
        <div classNames="Modal">

            {props.mostrar &&
                <div
                className="Modal-overlay"
                onClick={props.cerrar}
                />
            }

            <div classNames={ModalClass}>
                {props.children}
            </div>

        </div>
    );
}

const mapStateToProps = estado => {
    return {
        cerrar: estado.cerrar,
        children: estado.children,
        mostrar: estado.mostrar,
    };
};

export default connect(mapStateToProps)(Modal);