const ESTADO_REPOSO = {
    autorizarUsuario: null,
};

const aplicarSetAutorizarUsuario = (estado, accion) => ({
    ...estado,
    autorizarUsuario: accion.autorizarUsuario,
});

function sesionReducer(estado = ESTADO_REPOSO, accion) {
    switch (accion.type) {
        case 'SET_AUTORIZAR_USUARIO': {
            return aplicarSetAutorizarUsuario(estado, accion);
        }
        default:
            return estado;
    }
}

export default sesionReducer;