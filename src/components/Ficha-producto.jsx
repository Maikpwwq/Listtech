import React from 'react';
import '../css/Fichaproducto.css';
import styled from 'styled-components';

const StyledFicha = styled.div`
    margin: 0 auto;
    padding: 0;
    display: block;
`;

const FichaUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FichaLi = styled.li`
    display:inline;
    margin: 0 1em 0 0;
`;

const Fichaproducto = props => (
    <StyledFicha>
        {props.productos &&
        <FichaUl>
            {props.productos.map((producto, index) => (
                <FichaLi key={`Ficha-${index}`} target="_blank">
                    <div className="Fichaproducto-header">
                        <h3>{producto.titulo}</h3>
                        <figure>
                            <img src={producto.foto} alt={'imagen'} />
                        </figure>
                    </div>
                    <div className="Fichaproducto-body">
                        <p>{producto.marca}</p>
                        <p>{producto.descripcion}</p>
                        <p>{producto.garantia}</p>
                        <p>{producto.precio}</p>
                    </div>
                    <div className="Fichaproducto-footer">
                        <span className="badge bagde-pill badge-danger ml-2">
                            {producto.solicitar}
                        </span>
                        <button className="btn btn-danger"
                            
                        >
                            Agregar a compras
                            </button>
                    </div>
                </FichaLi>
            ))}            
        </FichaUl>
        }
    </StyledFicha>          
)

export default Fichaproducto;

/*<Ficha-producto
    dataProductos={props.datab}
/>*/