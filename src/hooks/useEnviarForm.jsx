import { useState, useEffect } from 'react';
import * as firebase from '../init-firebase';

// React Hooks Formulario enviado 

const useEnviarForm = () => {

    // Crear propiedades de envio de formulario (Requerimiento)
    const [EnviarForm, setEnviarForm] = useState(false);       

    useEffect(() => {
        firebase().onFormStateChanged((requerimiento) => {
            if (requerimiento) {
                this.props.setRequerimiento(requerimiento);
                this.props.setEnviarForm(true);
            }
        });
    }, []);

    return EnviarForm
}

export default useEnviarForm;      