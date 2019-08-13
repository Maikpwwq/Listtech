import { useState } from 'react';
import { storage, database } from '../init-firebase';

// React Hooks Formulario enviado 

const useSendForm = () => {
    const [SendForm, setSendForm] = useState(false);       

    return SendForm
}

export default useSendForm;