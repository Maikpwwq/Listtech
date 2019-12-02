// import React, { ReactChild } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux'

import Fichaproducto from './Ficha-producto';

import { NavLink } from 'react-router-dom'; 

import next from '../../imagenes/next.png';
import prev from '../../imagenes/prev.png';

// import data from '../../constantes/productos/Productos.jsx'

import styled from 'styled-components'

/* Style Carrusel */
const CarruselStyle = styled.div`
    background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align: center;
    box-sizing: border-box;
`;

const Carousel = styled.div`
    width: 800px;
    height: 600px; 
    display: inline-block;
    position: sticky;
    overflow: scroll
    background: #1F1C2C;  
    background: -webkit - linear - gradient(to top, #928DAB, #1F1C2C); 
    background: linear - gradient(to top, #928DAB, #1F1C2C);
`;

/* Style  */

const CarruselProductos = styled.div`    
    float: left;
    /*width: auto;    
    height: auto; */
    margin: 5px;   

    &:after {
    content:'';
    display: block;
    text-align: center;
    width: 300px;
    height: 300px;
    outline: 5px solid #61DAFE;
    position: relative;
    }
`;

/*`translateX(-${ property.index * (100 / properties.length) }%)`*/

const CarruselWrapper = styled.div`
    position: relative;
    display: -webkit - flex; /* Safari */
    -webkit - align - items: center; /* Safari 7.0+ */
    display: flex;
    align - items: center;
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);       
`;

const CarruselListaProducto = styled.div`
    position: absolute;
    top: auto; 
    right: auto; 
    bottom: auto; 
    left: auto; 
    z-index: auto; 
    max-width: 100 %;
    margin: auto;            

    .Producto {
    flex: 1;
    min-width: 460px;
    }

    .FichaProducto {
    flex: 1;
    min-width: 200px;
    opacity: 0.7;
    transform: scale(0.8);
    box-shadow: none;
    background-color: white;
    border-color: white;
    transition: opacity 300ms linear, border-color 300ms linear, background-color 300ms linear,transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
        .FichaDetalles {
        opacity: 0;
        transition: opacity 150ms linear;
        }
    }    
`;

const CarruselDescripcion = styled.div`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    
    &:hover {
    background-color: #717171;
    }
`;

const Anterior = styled.button` 
    cursor: pointer;
    position: absolute;
    vertical-align: middle;
    top: 50 %;
    width: auto;
    margin - top: -22px;
    padding: 16px;
    color: white;
    font - weight: bold;
    font - size: 18px;
    transition: 0.6s ease;
    border - radius: 0 3px 3px 0;
    user - select: none;
    left: 0;

    &:hover {
    background-color: rgba(0,0,0,0.8);
    }

`;

const Siguiente = styled.button` 
    cursor: pointer;
    position: absolute;
    top: 50 %;
    width: auto;
    margin - top: +22px;
    padding: 16px;
    color: white;
    font - weight: bold;
    font - size: 18px;
    transition: 0.6s ease;
    border - radius: 0 3px 3px 0;
    user - select: none;
    right: 0;
    border - radius: 3px 0 0 3px;
    
    &:hover {
    background-color: rgba(0,0,0,0.8);
    }

`;

/*
"1 Biometría Control Acceso"
"2 Cerraduras electrónicas"
"3 Cerraduras mecánicas"
"4 Accesorios y Soportes"
"5 Salidas PUSH emergencia"
"6 Cierra puertas"
"7 Sensores y cantoneras electrónicas"
"8 Redes cableado estructurado"
"9 Acceso suspendido en alturas"
*/

// console.log("Seleccion", Producto);
function Carrusel({ EstadoInicial, Productos, data }) {

    const [producto, setProducto] = useestado(() => {
        const EstadoInicial = data.Productos[0];
        return EstadoInicial;
    }, [props.Productos]);

    const [productos, setProductos] = useestado(EstadoInicial);

    const lineaProductos = (estado = EstadoInicial, action) => {
        switch (Producto.Linea) {

            case '1 Biometría Control Acceso':
                return {
                    ...estado,
                    them: action.payload
                };
            case '2 Cerraduras electrónicas':
                return {
                    ...estado,
                    them: action.payload
                };
            case '3 Cerraduras mecánicas':
                return {
                    ...estado,
                    them: action.payload
                };
            case '4 Accesorios y Soportes':
                return {
                    ...estado,
                    them: action.payload
                };
            case '5 Salidas PUSH emergencia':
                return {
                    ...estado,
                    them: action.payload
                };
            case '6 Cierra puertas':
                return {
                    ...estado,
                    them: action.payload
                };
            case '7 Sensores y cantoneras electrónicas':
                return {
                    ...estado,
                    them: action.payload
                };
            case '8 Redes cableado estructurado':
                return {
                    ...estado,
                    them: action.payload
                };
            case '9 Acceso suspendido en alturas':
                return {
                    ...estado,
                    them: action.payload
                };    
            default:
                return estado;
        }
    }

    render() {
        return (

            <CarruselStyle >

                <Carousel>

                    <CarruselProductos>
                        key = {`Carrusel-${index}`}

                        <CarruselListaProducto>
                            <CarruselWrapper>
                                {
                                    Productos && Productos.map((Producto, index) => (
                                        <NavLink to={{
                                            pathname: `/productos/${index}-${Producto.name}`,
                                            estado: { ...Productos }
                                        }}>
                                            <Fichaproducto
                                                Producto={Producto}

                                                key={`Producto-${index}`}
                                                /*id={Producto._id}*/
                                            /> No Producto Actual: {Producto.index}
                                        </NavLink>
                                    ))
                                }
                            </CarruselWrapper>
                        </CarruselListaProducto>

                        <CarruselSelector>
                            
                        <Anterior id="Carrusel-anterior-producto"
                            onClick={() => setProducto(prevProducto => Producto.index - 1)}
                            disabled={Producto.index === data.Productos.length - 1}
                            > Anterior
                            <img src={prev} alt="" />
                        </Anterior>
                        <Siguiente id="Carrusel-siguiente-producto"
                            onClick={() => setProducto(prevProducto => Producto.index + 1)}
                            disabled={Producto.index === 0}
                            > Siguiente
                            <img src={next} alt="" />
                        </Siguiente>

                        </CarruselSelector>

                    </CarruselProductos>

                </Carousel>

            </CarruselStyle>               
        )
    };
}

const mapestadoToProps = (estado) => {
    return {
        productos: estado.producto.productos
    }
}
    
export default connect(mapestadoToProps)(Carrusel);