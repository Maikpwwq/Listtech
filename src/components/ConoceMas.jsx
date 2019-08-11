import React, { Component } from 'react';
/*import '../css/Garantia.css';*/

import styled from 'styled-components'

/* Style ConoceMas */
const ConocemasStyle = styled.div`
    text-align: center;
    box-sizing: border-box;    
`;

/* Style header */
const ConocemasHeader = styled.header`
    text-align: center;
    box-sizing: border-box;    
    font-weight: bold;
    display: inblock;
    width: 100%;
    font-size: 35px;
`;

const ProductosyserviciosMas = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
    font-size: 21px;
`;

const SemiTitulo = styled.h2`
    color: orange;
    font - weight: semibold;
    padding: 20px;
    font - size: 27px;
`;

class ConoceMas extends Component {
    constructor() {
        super();
        this.state = {
            title: 'CONOCE MÁS',            
        }
    }

    render() {
        return (       
            <ConocemasStyle>
                <ConocemasHeader>
                    {this.state.title}<br />

                </ConocemasHeader>                                        
                <ProductosyserviciosMas>

                    <div className="Garantia-descripcion" >                        
                        <SemiTitulo><strong>GARANTI&#769;A</strong></SemiTitulo>
                        <ul className="">
                            <li>Producto compatible</li>
                            <li>Producto de calidad </li >
                            <li>Precio competitivo </li >
                            <li>Lo mejor en servicio al cliente </li >
                            <li>Conocimientos y habilidades </li >
                            <li>Intensidad en todos los trabajos realizados </li >
                            <li>Entrega oportuna segun cronograma</li >                        
                        </ul>
                    </div>

                    <div className="Productosyservicios-tendencias ">
                        <SemiTitulo><strong>TENDENCIAS</strong></SemiTitulo>
                        <ul className="">
                            <li> Nueva li&#769;nea black. </li >
                            <li> Deja atra&#769;s las llaves. </li >
                            <li> Cerraduras electronicas-Touch -Sense -Connect. </li >
                            <li> Control de acceso. </li >
                            <li> identificacio&#769;n biome&#769;trica. </li >
                            <li> Reconocimiento dactilar. </li >
                            <li> Registro de marcaciones en puntos de venta. </li >
                        </ul>
                    </div>

                    <div className="Productosyservicios-seguridad ">
                        <SemiTitulo><strong>MA&#769;S DE SEGURIDAD</strong></SemiTitulo>
                        <ul className="">
                            <li> Mantenimiento Preventivo. </li >
                            <li> Consultora&#769;s en Sistemas. </li >
                            <li> Software y plataformas tecnolo&#769;gicas de informacio&#769;n. </li >
                            <li> Control de Visitantes y Contratistas. </li >
                            <li> Sistema para Programacio&#769;n. </li >
                            <li> Control y Liquidacio&#769;n de Tiempos Laborados. </li >
                        </ul>
                    </div>                        

                </ProductosyserviciosMas>                
            </ConocemasStyle>
        );
    }
}

export default ConoceMas;

