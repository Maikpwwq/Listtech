const ESTADO_REPOSO = { count: 0 };

function init(ESTADO_REPOSO) {
    return { count: ESTADO_REPOSO };
}

function productosReducer(estado = ESTADO_REPOSO, accion) {
    switch (accion.type) {
        case 'increment':
            return { count: estado.count + 1 };        
        case 'incremento':
            return { count: estado.count + 1 };
        case 'reset':
            return init(action.payload);
        default:
            return estado;
            throw new Error();
    }
}

export default productosReducer;

/*
 function Counter() {
    const [state, dispatch] = useReducer(
        reducer, ESTADO_REPOSO, init);
    return (
        <>
            Count: {estado.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({type: 'reset', payload: ESTADO_REPOSO})}>
             Reset
            </button>
        </>
    );
}
 */