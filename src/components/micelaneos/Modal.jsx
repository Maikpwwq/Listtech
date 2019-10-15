import React, { useState } from 'react';
import classNames from 'classnames';

function Modal(props) {

    const ModalClass =
        classNames('Modal-wrapper', (event) => {
        showModal: props.show,
    })

    return (
        <div classNames="Modal">

            {props.show &&
                <div
                className="Modal-overlay"
                onClick={props.close}
                />
            }

            <div classNames={ModalClass}>
                {props.children}
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        close: state.close,
        children: state.children,
        show: state.show,
    };
};

export default connect(mapStateToProps)(Modal);