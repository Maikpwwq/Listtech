import { useState } from 'react';
import { storage, database } from '../../init-firebase';

// React Hooks Formulario enviado 

const useSendForm = () => {
    const [SendForm, setSendForm] = useState(false);
    const form = new FormData(event.target);
    const newDate = new Date().toISOString();

    const requerimiento = {
        'date': newDate,
        'titulo': form.get('titulo'),
        'solicitud': form.get('solicitud'),
        'nombre': form.get('nombre'),
        'email': form.get('email'),
        'telefono': form.get('telefono'),
        'mensaje': form.get('mensaje'),
        'contactar': form.get('contactar'),
    }

    /*this.db.collection('requerimientos').get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                render(doc);
            })
        });*/

    storage.ref().child(this.db.collection('contactos').add({
        nombre: form.nombre.value,
        email: form.email.value,
        telefono: form.telefono.value,
    }));    
    
    // Resetear los valores en blanco
    //form.nombre.value = '',
    //form.email.value = '',    

    // Empujar el requerimiento a la base de datos y asignar su verificacion
    database.ref('Requerimientos').push(requerimiento)
        .then(() => setSendForm(true))
        .catch(() => setSendForm(false))

    return SendForm
}

export default useSendForm;