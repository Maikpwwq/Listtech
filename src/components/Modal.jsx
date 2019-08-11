import React from 'react';
import classNames from 'classnames';

const Modal = props => {

    const ModalClass = classNames(Modal - wrapper, {
        showModal: props.show,
    });

    return (
        <div classNames="Modal">
            {props.show &&
                <div className="Modal-overlay" onClick={props.close} />
            }
            <div classNames={ModalClass}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;