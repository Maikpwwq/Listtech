const ESTADO_REPOSO = {
    usuarios: null,
};

const aplicarSetUsuarios = (estado, accion) => ({
    ...estado,
    usuarios: accion.usuarios,
});

const aplicarSetUsuario = (estado, accion) => ({
    ...estado,
    usuarios: {
        ...estado.usuario,
        [accion.uid]: accion.usuario,
    },
});

function usuariosReducer(estado = ESTADO_REPOSO, accion) {
    switch (accion.type) {
        case 'SET_USUARIOS': {
            return aplicarSetUsuarios(estado, accion);
        }
        case 'SET_USUARIO': {
            return aplicarSetUsuario(estado, accion);
        }
        default:
            return estado;
    }
}

export default usuariosReducer;