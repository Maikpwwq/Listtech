import { useState, useEffect } from 'react';

// React Hooks Formulario enviado 

const useModal = (props) => {

    // Crear propiedades de envio de formulario (Requerimiento)
    const [Modal, setModal] = useState(false);

    useEffect(() => {                
            props.mostrarModal.then(modal => setModal(true))  
        }, []);

    return Modal
}

export default useModal;      