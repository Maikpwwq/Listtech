import React from 'react';
import PropTypes from 'prop-types';

/*import '../css/Fichaproducto.css';*/

import styled from 'styled-components';

const StyledFicha = styled.div`
    align: center;
    box-sizing: border-box;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    display: inline;
`;


    /*display: none;*/
    /* Fading animation */
const FichaProducto = styled.div`
    -webkit - animation - name: fade;
    -webkit - animation - duration: 1.5s;
    animation - name: fade;
    animation - duration: 1.5s;
    border: 3px #f3f3f3 solid;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s linear;
    cursor: pointer;
    background-color: #f3f3f3;
    padding: 10px;
    min-width: 220px;
    display: block;
    text-align: left;
    margin: 0 auto;

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
    Width: auto;
    height: 100%;
`;

const Titulo = styled.div`
    color: #0066cc;
    font - size: 21px;
    text-transform: uppercase; /* lowercase; capitalize */
    font-weight: bold;
    padding: 8px 12px;
    bottom: 8px;
    width: 100 %;
    text - align: center;
`;

const Fichaheader = styled.div`
    margin: 0;
    display:block;
    align: center,
    padding: 0;
    list-style-type: none;
`;

const IndexSpan = styled.span`
    text-align: right;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FichaDetalles = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;
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
    color: #0066cc;
    position: relative;
    font-size: 19px;
    padding: 8px 12px;
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
            <FichaProducto id={`Ficha-${index}`} key="id" target="_blank">

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

Fichaproducto.propTypes = {
    Producto: PropTypes.object.isRequired
}

export default Fichaproducto;