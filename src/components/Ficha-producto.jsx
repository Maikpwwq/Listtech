import React from 'react';
import PropTypes from 'prop-types';

import '../css/Fichaproducto.css';

import styled from 'styled-components';

const StyledFicha = styled.div`
    margin: 0 auto;
    padding: 0;
`;

const FichaProducto = styled.div`
    display: none;
    /* Fading animation */
    -webkit - animation - name: fade;
    -webkit - animation - duration: 1.5s;
    animation - name: fade;
    animation - duration: 1.5s;

    @-webkit - keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }

    @keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }
`;

const Productoimg = styled.img`
    display: inline - flex;
    float: left;
    Width: auto;
    height: 100%;
`;

const Titulo = styled.div`
    color: #f2f2f2;
    font - size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100 %;
    text - align: center;
`;

const Fichaheader = styled.div`
    margin: 0;
    display:block;
    padding: 0;
    list-style-type: none;
`;

const IndexSpan = styled.span`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FichaDetalles = styled.div`
    margin: 0;
    padding: 0;
    list-style-type: none;
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

const Precio = styled.div`
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
`;

const FichaproductoInteraccion = styled.div`
    display:block;
`;

const FichaproductoDescripcion = styled.div`
    display:block;
`;

/* {props.productos.map((producto, index) => ( */

const Fichaproducto = ({ Producto }) => {
    const { index, titulo, imagen, precio, marca, descripcion, garantia, solicitud } = Producto

    return(
        < StyledFicha >
            <FichaProducto key={`Ficha-${index}`} target="_blank">

                <Fichaheader>
                    <IndexSpan> {index + 1} </IndexSpan>
                    <Titulo>{titulo}</Titulo>                    
                    <Productoimg src={imagen} alt={'imagen'} />
                </Fichaheader>                

                <FichaDetalles>
                    <FichaUl>                
                        <FichaLi>

                            <Precio>{precio}</Precio>
                            <FichaproductoDescripcion>
                                <p> Marca: {marca}</p>
                                <p> Descripcion: {descripcion}</p>
                                <p> Garantia: {garantia}</p>
                            </FichaproductoDescripcion>

                            <FichaproductoInteraccion>
                                <span className="badge bagde-pill badge-danger ml-2">
                                    {solicitud}
                                </span>
                                <button className="btn btn-danger"
                                > Agregar a compras
                            </button>
                            </FichaproductoInteraccion>                        

                        </FichaLi>                
                    </FichaUl>    
                    
                </FichaDetalles>

            </FichaProducto>
        </StyledFicha>
    )
}

export default Fichaproducto;

/*<Ficha-producto
    dataProductos={props.datab}
/>*/