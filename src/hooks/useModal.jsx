import { useState, useEffect } from 'react';

// React Hooks Formulario enviado 

const useModal = () => {

    // Crear propiedades de envio de formulario (Requerimiento)
    const [Modal, setModal] = useState(false);

    useEffect(() => {        
        x()
            .then(modal => setModal(true))  
        }, []);

    return Modal
}

export default useModal;      