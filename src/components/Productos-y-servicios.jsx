import React, { Component } from 'react';

//import * as{ default as Productos } from '../Productos.json';
//import * as{ default as Compras } from '../Compras.json';

import styled from 'styled-components'

const ProductosyServiciosstyle = styled.div`
    display: block;
    text-align: left;
`;

const ProductosHeader = styled.header`
    display: block;
    text-align: center;
`;

const ProductosyServiciosGrupo = styled.div`
    list-style-type: none;
    margin: 2px;
    width: 100%;
    padding: 0;   
    display: block;
    background-color: #f1f1f1;
    text-align: left;
    height: auto; /* Full height */
    position: sticky; /* Make it stick, even on scroll */
    overflow: auto; /* Enable scrolling if the sidenav has too much content */
    
`;

const Lineaul = styled.ul`
    display: none;    
    position: absolute;
    padding: 16px;
    height: auto;
    cursor: col-resize;
    pointer-events: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 10;
    
    &:hover{
    display: block;
    background-color: #666666;
    }
`;

const ProductosyServiciosLinea = styled.button`
    display: block;
    padding: 8px 16px;
    width: 320px;
    font-size: 21px;
    border: none;
    cursor: row-resize;
    color: Black;
    text-decoration: none;
    position: relative;

    &:active {
    background-color: #666666;
    color: white;
    }

    &:hover {
    background-color: ##a6a6a6,
    display: block;
    }
    
    &:hover ${Lineaul}{
    display: block;
    position: sticky;
    overflow: auto;
    background-color: #666666,
    color: white;
    }
`;

const Lineali = styled.li`
    display: block;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: #666666;
    padding: 12px 16px;
    z-index: 10;

    &:hover {
    background-color: #666666;
    color: white;    }
`;

class Productosyservicios extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Productos Y Servicios',
        }   
    }               

    id = props.match.params.id; 

    render() {

        return (
            <ProductosyServiciosstyle>
                <div className="Productosyservicios-container ">
                    <ProductosHeader>
                        {this.props.title}
                    </ProductosHeader>
                    <ProductosyServiciosGrupo>
                        <ProductosyServiciosLinea

                        > 1.	LI&#769;NEA CERRADURAS ELECTR&#769;NICAS
                            <Lineaul>                                                                
                                <Lineali> Cerraduras puertas de seguridad </Lineali>
                                <Lineali> Cerraduras comerciales </Lineali>
                                <Lineali> Conjuntos para entrada principal </Lineali>
                                <Lineali> Automatizacio&#769;n vehicular - Barreras - Antenas </Lineali >
                            </Lineaul>                
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea

                        > 2.	LI&#769;NEA CERRADURAS MECA&#769;NICAS
                            <Lineaul>
                                <Lineali> Cerraduras puertas de seguridad </Lineali>
                                <Lineali> Cerraduras comerciales </Lineali>
                                <Lineali> Conjuntos para entrada principal </Lineali>
                                <Lineali> Torniquetes </Lineali >
                                <Lineali> Motores Corredizos - Levadizos - Abatibles - Garaje </Lineali >                    
                                <Lineali> Puertas en Vidrio -  Tipo reja – Seccionables </Lineali >
                            </Lineaul>                
                        </ProductosyServiciosLinea>                     

                        <ProductosyServiciosLinea
                        > 3.	LI&#769;NEA ACCESORIOS SOPORTE
                            <Lineaul>
                                <Lineali> Soportes superiores y paradas </Lineali >
                                <Lineali> Barras de agarre  </Lineali >
                                <Lineali> Pivotes Continuos </Lineali >
                                <Lineali> Bisagras de piso</Lineali >
                                <Lineali> Bisagras para puertas</Lineali >                                
                            </Lineaul>                
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea

                        > 4.	LI&#769;NEA SALIDAS PUSH EMERGENCIA
                            <Lineaul>
                                <Lineali> Vidrios laminados </Lineali >
                                <Lineali> Barra Push - Vertical Rod  </Lineali >
                                <Lineali> Barras antipatico </Lineali >
                                <Lineali> Puertas cortafuegos </Lineali >
                                <Lineali> Pestillos de tracción </Lineali >                                 
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea

                        > 5.	LI&#769;NEA CIERRA PUERTAS
                            <Lineaul>
                                <Lineali> Brazos hidra&#769;ulicos </Lineali >
                                <Lineali> Cierrapuertas de piso</Lineali >                                
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea

                        > 6.	LI&#769;NEA SENSORES Y CANTONERAS ELECTRO&#769;NICAS
                            <Lineaul>
                                <Lineali> Sensores Movimiento-Proximidad-Impacto-Humo-Contacto </Lineali >
                                <Lineali> Cantoneras - Huelgas Electrónicas </Lineali >
                                <Lineali> Interruptores </Lineali >
                                <Lineali> Pulsadores electromagnéticos para puertas </Lineali >
                            </Lineaul>               
                        </ProductosyServiciosLinea>
                
                        <ProductosyServiciosLinea
                        > 7.	LI&#769;NEA REDES CABLEADO ESTRUCTURADO
                            <Lineaul>
                                <Lineali> Sistemas de intrusio&#769;n </Lineali >            
                                <Lineali> Sistemas CCTV - Enlaces inala&#769;mbricos </Lineali >
                                <Lineali> Control de acceso  – Video Citofoni&#769;a </Lineali >
                                <Lineali> Cerco ele&#769;ctrico perimetral - Sistemas de intrusio&#769;n </Lineali >
                                <Lineali> Plantas telefe&#769;nicas </Lineali >
                                <Lineali> Video Porteros – DVR - UVR - Plantas telefónicas - Sirenas </Lineali >
                                <Lineali> Ca&#769;maras de seguridad – Bala - Domos </Lineali >
                                <Lineali> Alarmas ala&#769;mbricas e inala&#769;mbricas </Lineali >                                
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea

                        > 8.	LI&#769;NEA ACCESO SUSPENDIDO EN ALTURAS
                            <Lineaul>
                                <Lineali> Andamios ele&#769;ctricos certificados </Lineali >
                                <Lineali> Plataformas Colgantes Y Cremallera </Lineali >
                                <Lineali> Elevadores (Ascensores) </Lineali >
                                <Lineali> Unidades permanentes en edificios </Lineali >
                                <Lineali> Plataformas temporales suspendidas (TSP) </Lineali >
                                <Lineali> Unidad de mantenimiento BMU </Lineali >
                                <Lineali> Sistemas tipo pescante </Lineali >
                                <Lineali> Motores para plataformas Y Cajas de control central </Lineali >                                
                                <Lineali> Torre Gru&#769;as </Lineali >
                                <Lineali> Mecanismos de suspensio&#769;n </Lineali >                               
                            </Lineaul>
                        </ProductosyServiciosLinea>                

                        <ProductosyServiciosLinea
                        >MECANISMOS DE SUSPENSIO&#769;N
                            <Lineaul>
                                <Lineali> Puntos de anclajes </Lineali >
                                <Lineali> Anclajes certificados para lineas de vida horizontales y verticales </Lineali >
                                <Lineali> Equipos de seguridad industrial </Lineali >
                                <Lineali> Anclajes para li&#769;neas de vida </Lineali >
                                <Lineali> Sillas de trabajo en suspensio&#769;n </Lineali >
                                <Lineali> Mosquetones </Lineali >
                                <Lineali> Arneses </Lineali >
                                <Lineali> Ochos </Lineali >
                                <Lineali> Li&#769;neas de vida en cuerda </Lineali >
                                <Lineali> Seguros de cuerda </Lineali >
                                <Lineali> Protectores de cable y de cuerda </Lineali >
                                <Lineali> Cuerdas este&#769;ticas y dina&#769;micas </Lineali >
                                <Lineali> Kits de rescate </Lineali >
                                <Lineali> Freno de seguridad </Lineali >
                            </Lineaul>
                        </ProductosyServiciosLinea>
                    </ProductosyServiciosGrupo>                                                
                    <div className="Productosyservicios-tienda">

                    </div>
                </div>
            </ProductosyServiciosstyle>
        );
    }
}

export default Productosyservicios;