import React, { useState } from 'react';

function HookContador() {

    const valorInicial = 0;
    const [count, setContador] = useState(valorInicial);

    const cc = () => {
        setContador(prevCount => prevCount + 1)
    };
        

    return (
        <div>
            Count: {count}
            <button onClick={() => setContador(prevCount => prevCount + 1)}>
                Incrementar {count}
            </button>
            <button onClick={() => setContador(valorInicial)}>
                Restablecer {count}
            </button>
            <button onClick={() => setContador(prevCount => prevCount - 1)}>
                Disminuir {count}
            </button>
        </div>
        )
};

export default HookContador; 