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

<<<<<<< HEAD
    id = props.match.params.id; 

=======
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
    render() {

        return (
            <ProductosyServiciosstyle>
                <div className="Productosyservicios-container ">
                    <ProductosHeader>
                        {this.props.title}
                    </ProductosHeader>
                    <ProductosyServiciosGrupo>
                        <ProductosyServiciosLinea
<<<<<<< HEAD
                        > 1.	LI&#769;NEA CERRADURAS ELECTR&#769;NICAS
                            <Lineaul>                                                                
                                <Lineali> Cerraduras puertas de seguridad </Lineali>
                                <Lineali> Cerraduras comerciales </Lineali>
                                <Lineali> Conjuntos para entrada principal </Lineali>
                                <Lineali> Automatizacio&#769;n vehicular - Barreras - Antenas </Lineali >
=======
                            >CERRADURAS ELE&#769;CTRONICAS
                            <Lineaul>                                
                                <Lineali> Automatizacio&#769;n vehicular </Lineali >
                                <Lineali> Cerraduras residenciales </Lineali>
                                <Lineali> Cerraduras comerciales </Lineali>
                                <Lineali> Conjuntos para entrada principal </Lineali>
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
                                <Lineali> Puertas inteligentes </Lineali >
                            </Lineaul>                
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
<<<<<<< HEAD
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
=======
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
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
<<<<<<< HEAD
                        > 4.	LI&#769;NEA SALIDAS PUSH EMERGENCIA
                            <Lineaul>
                                <Lineali> Vidrios laminados </Lineali >
                                <Lineali> Barra Push - Vertical Rod  </Lineali >
                                <Lineali> Barras antipatico </Lineali >
                                <Lineali> Puertas cortafuegos </Lineali >
                                <Lineali> Pestillos de tracción </Lineali >                                 
=======
                        >BISAGRAS Y PIVOTES
                            <Lineaul>
                                <Lineali> Pivotes Continuos </Lineali >
                                <Lineali> Bisagras de piso</Lineali >
                                <Lineali> Bisagras para puertas</Lineali >
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
<<<<<<< HEAD
                        > 5.	LI&#769;NEA CIERRA PUERTAS
                            <Lineaul>
                                <Lineali> Brazos hidra&#769;ulicos </Lineali >
                                <Lineali> Cierrapuertas de piso</Lineali >                                
=======
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
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
<<<<<<< HEAD
                        > 6.	LI&#769;NEA SENSORES Y CANTONERAS ELECTRO&#769;NICAS
                            <Lineaul>
                                <Lineali> Sensores Movimiento-Proximidad-Impacto-Humo-Contacto </Lineali >
                                <Lineali> Cantoneras - Huelgas Electrónicas </Lineali >
                                <Lineali> Interruptores </Lineali >
                                <Lineali> Pulsadores electromagnéticos para puertas </Lineali >
=======
                        >SALIDAS PUSH EMERGENCI&#769;A
                            <Lineaul>
                                <Lineali> Vidrios laminados </Lineali >
                                <Lineali> Vertical Rod </Lineali >
                                <Lineali> Barras antipatico </Lineali >
                                <Lineali> Puertas cortafuegos </Lineali >
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
                            </Lineaul>               
                        </ProductosyServiciosLinea>
                
                        <ProductosyServiciosLinea
<<<<<<< HEAD
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
=======
                        >SENSORES Y HUELGAS ELECTRONICAS
                            <Lineaul>
                                <Lineali> Sensores </Lineali >
                                <Lineali> ES </Lineali >
                                <Lineali> Electroimanes </Lineali >
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
                            </Lineaul>
                        </ProductosyServiciosLinea>

                        <ProductosyServiciosLinea
<<<<<<< HEAD
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
=======
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
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
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