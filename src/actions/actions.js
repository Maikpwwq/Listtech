
// Productos y servicios
export const setListadoProductos = payload => ({
    type: 'SET_LISTADO_PRODUCTOS',
    payload,
});

// Sesion de usuario
export const setEstado = payload => ({
    type: 'SET_ESTADO_USUARIO',
    payload,
});

export const setModal = payload => ({
    type: 'SET_MODAL',
    payload,
});

// autorizarUsuario
export const autorizarUsuario = payload => ({
    type: 'SET_AUTORIZAR_USUARIO',
    payload,
});

export const setUsuario = payload => ({
    type: 'SET_USUARIO',
    payload,
});

export const setFirebaseInitialized = payload => ({
    type: 'SET_INICIO_FIREBASE',
    payload,
});

export const setInicioSesion = payload => ({
    type: 'SET_INICIO_SESION',
    payload,
});

// Formulario de contacto 
export const setEnviarForm = payload => ({
    type: 'SET_ENVIAR_FORM',
    payload,
});

export const setRequerimiento = payload => ({
    type: 'SET_REQUERIMIENTO',
    payload,
});

// Tienda y Gestion de Compras
export const setAceptar = payload => ({
    type: 'SET_PAGAR',
    payload,
});

export const setRechazar = payload => ({
    type: 'SET_RECHAZAR',
    payload,
});

export const addCompra = (compra) => {
    return (dispatchEvent, getState) => {
        // async call to database
        dispatchEvent({
            type: 'ADD_COMPRA',
            compra: 'compra',
        });
    }
};

// Mensajes => payload =>

export function agregarMensaje(text, payload) {
  return { 
    type: 'ADD_TODO',
    payload,
  };
};

export function eliminarMensaje(id, payload) {
  return { 
    type: 'ELIMINAR_TODO',
    payload,
  };
};

export function editarMensaje(id, text, payload) {
  return { 
    type: 'EDITAR_TODO',
    payload,
  };
};

export function enviarMensaje(id, payload) {
  return { 
    type: 'COMPLETE_TODO',
    payload,
  };
};

export function mensajeEntregado(payload) {
  return { 
    type: 'ENTREGA_COMPLETA',
    payload,
  };
};

export function limpiarEntrega(payload) {
  return { 
    type: 'LIMPIEZA_COMPLETA',
    payload,
  };
};