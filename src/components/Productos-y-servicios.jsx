import React, { Component } from 'react';
import '../css/Productosyservicios.css';

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

const ProductosyServiciosLinea = styled.button`
    display: block;
    padding: 8px 16px;
    width: 320px;
    font-size: 21px;
    border: none;
    cursor: row-resize;
    color: Black;
    text-decoration: none;

    :active {
    background-color: #4CAF50;
    color: white;
    }

    :hover {
    background-color: #555,
    display: block;
    color: white;
    }
    
    :hover .Lineaul{
    display: block;
    }
`;

/* z - index only works on positioned elements
 * position: absolute 
 * position: relative
 * position: fixed
 * position: sticky*/

const Lineaul = styled.ul`
    display: none;    
    position: relative;
    padding: 16px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 10;
    
    :hover{
    display: block;
    }
`;

const Lineali = styled.li`
    display: block;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 10;
`;

class Productosyservicios extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Productos Y Servicios',
        }   
    }               

    render() {

        return (
            <ProductosyServiciosstyle>
                <div className="Productosyservicios-container ">
                    <ProductosHeader>
                        {this.props.title}
                    </ProductosHeader>
                    <ProductosyServiciosGrupo>
                        <ProductosyServiciosLinea
                            >CERRADURAS ELE&#769;CTRONICAS
                            <Lineaul>                                
                                <Lineali> Automatizacio&#769;n vehicular </Lineali >
                                <Lineali> Cerraduras residenciales </Lineali>
                                <Lineali> Cerraduras comerciales </Lineali>
                                <Lineali> Conjuntos para entrada principal </Lineali>
                                <Lineali> Puertas inteligentes </Lineali >
                            </Lineaul>                
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
                            >CERRADURAS MECA&#769;NICAS
                            <Lineaul>
                                <Lineali> Cerraduras residenciales </Lineali>
                                <Lineali> Cerraduras comerciales </Lineali>
                                <Lineali> Conjuntos para entrada principal </Lineali>
                                <Lineali> Barreras vehiculares </Lineali >
                                <Lineali> Antenas vehiculares </Lineali >
                                <Lineali> Torniquetes </Lineali >
                                <Lineali> Motores para garaje </Lineali >
                                <Lineali> Motores abatibles </Lineali >
                                <Lineali> Motores corredizos </Lineali >
                                <Lineali> Motores levadizos </Lineali >
                                <Lineali> Sistemas de intrusio&#769;n </Lineali >                                
                                <Lineali> Puertas de seguridad </Lineali >
                                <Lineali> Puertas de vidrio </Lineali >
                                <Lineali> Puertas tipo reja </Lineali >
                                <Lineali> Puertas seccionales </Lineali >
                            </Lineaul>                
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
                        >CIERRA PUERTAS
                            <Lineaul>
                                <Lineali> Brazos hidra&#769;ulicos </Lineali >
                                <Lineali> Cierrapuertas de piso</Lineali >
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
                        >BISAGRAS Y PIVOTES
                            <Lineaul>
                                <Lineali> Pivotes Continuos </Lineali >
                                <Lineali> Bisagras de piso</Lineali >
                                <Lineali> Bisagras para puertas</Lineali >
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
                        >REDES CABLEADO ESTRUCTURADO
                            <Lineaul>
                                <Lineali> Sistemas CCTV  </Lineali >
                                <Lineali> Control de acceso </Lineali >
                                <Lineali> Cableado estructurado </Lineali >
                                <Lineali> Plantas telefe&#769;nicas </Lineali >
                                <Lineali> Video porteros </Lineali >
                                <Lineali> Ca&#769;maras de seguridad </Lineali >
                                <Lineali> Alarmas ala&#769;mbricas  </Lineali >
                                <Lineali> Alarmas inala&#769;mbricas </Lineali >
                                <Lineali> Cerco ele&#769;ctrico perimetral </Lineali >
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
                        >SALIDAS PUSH EMERGENCI&#769;A
                            <Lineaul>
                                <Lineali> Vidrios laminados </Lineali >
                                <Lineali> Vertical Rod </Lineali >
                                <Lineali> Barras antipatico </Lineali >
                                <Lineali> Puertas cortafuegos </Lineali >
                            </Lineaul>               
                        </ProductosyServiciosLinea>
                
                        <ProductosyServiciosLinea
                        >SENSORES Y HUELGAS ELECTRONICAS
                            <Lineaul>
                                <Lineali> Sensores </Lineali >
                                <Lineali> ES </Lineali >
                                <Lineali> Electroimanes </Lineali >
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
                            >ACCESO SUSPENDIDO EN ALTURAS
                            <Lineaul>
                                <Lineali> Andamios ele&#769;ctricos certificados </Lineali >
                                <Lineali> Plataformas Colgantes </Lineali >
                                <Lineali> Plataformas Cremallera </Lineali >
                                <Lineali> Elevadores(Ascensores) </Lineali >
                                <Lineali> Unidades permanentes en edificios </Lineali >
                                <Lineali> Unidad de mantenimiento BMU </Lineali >
                                <Lineali> Sistemas tipo pescante </Lineali >
                                <Lineali> Torre Gr�as </Lineali >
                                <Lineali> Sistema permanente de suspensio&#769;n pra&#769;ctico y seguro </Lineali >
                                <Lineali> Plataformas temporales suspendidas (TSP) </Lineali >
                                <Lineali> Traccio&#769;n por carga autoalimentada Motores para plataformas  </Lineali >
                                <Lineali> Caja de control central </Lineali >
                                <Lineali> Cable de acero </Lineali >
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