import React, { Component } from 'react';
import '../css/Nosotros.css';

import styled from 'styled-components'

/* Style Nosotros */
const NosotrosStyle = styled.div`
    font - family: Arial, Helvetica, sans - serif;
    text-align: center;
    box-sizing: border-box;    
`;

/* Style the container */
const NosotrosContainer = styled.div`
    text-align: center;
    width:100%;  
    background-color: dark-blue;
`;

/* Style the header */
const Nosotrosheader = styled.header`
    padding: 15px;
    text-align: center;
    font-size: 35px;

    p {
        font-size: 21px;
    }
`;

/* Style the h1 */
const Nosotrosh1 = styled.h1`
    color: white;
    font-weight: bold;
    padding: 30px;
    font-size: 35px;
`;

/* Style the h2 string */
const Nosotrosh2 = styled.h2`
    color:orange;        
    font-weight: semi bold;    
    padding: 20px;
    font-size: 27px;
`;

/* Style the p string */
const Nosotrosp = styled.p`
    text-color:#ffffff;    
    margin: 2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 360;
    font - family: Arial, Helvetica, sans - serif;
    font-style: normal;
    padding: 10px 10px;
    font-size: 26px;
`;

const NosotrosSomos = styled.ul`    
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
    font-size: 27px;
`;

/*Style the ul 
const Nosotrosul = styled.ul`
    text-align: center;
    list-style-image: url('*.gif');
`;*/

/* Style the li */
const Nosotrosli = styled.li`
    text-align: center;
`;

class Nosotros extends Component {
    constructor() {
        super();
        this.state = {
            title: 'NOSOTROS',
        }
    }

    render(){
        return (
            <NosotrosStyle>
                <NosotrosContainer>
                    <Nosotrosheader>
                        <Nosotrosh1><strong>  {this.state.title} </strong></Nosotrosh1>
                        <p> A la vanguardia en el suministro de equipos, soluciones de acceso suspendido <br />
                            para trabajos en alturas y, dispositivos para control de acceso del personal.
                        </p>
                        <p>Disen&#771;o e implementacion de sistemas estructurados de redes para distribucio&#769;n <br />
                            y conectividad de voz, datos, electricidad y conexiones especiales.</p>
                    </Nosotrosheader                                                                    >
                    <NosotrosSomos>
                        <Nosotrosli>
                            <Nosotrosh2><strong> &#191;QUIENES SOMOS? </strong></Nosotrosh2>
                            <Nosotrosp>  Somos una organizacio&#769;n con tradicio&#769;n en el sector, orientados a ofrecer soluciones a medida en li&#769;neas de seguridad,<br />
                                industrial y electro&#769;nica, implementando bajo los mejores esta&#769;ndares te&#769;cnicos para garantizar los principios de soporte<br/>
                                y calidad.
                            </Nosotrosp>
                        </Nosotrosli>
                        <Nosotrosli>
                            <Nosotrosh2><strong> MISIO&#769;N </strong></Nosotrosh2>
                            <Nosotrosp>  Nuestras Li&#769;neas Integrales de Seguridad y Tecnologi&#769;a brindan informacio&#769;n, instalacio&#769;n, confianza y soporte,<br />
                                contamos con talento humano calificados, atendiendo con empati&#769;a a sus requerimientos.
                            </Nosotrosp>
                        </Nosotrosli>
                        <Nosotrosli className="Nosotros-vision">
                            <Nosotrosh2><strong> VISIO&#769;N </strong></Nosotrosh2>
                            <Nosotrosp>  En 2020 seremos una excelente compan&#771;i&#769;a, contando con profesionales e&#769;ticos que dara&#769;n solucio&#769;n a cada requerimiento,<br />
                                brindando servicios de calidad para generar acciones que reduzcan, mitiguen y controlen los riesgos que puedan<br/>
                                comprometer la integridad de las personas, asi garantizando un ambiente protegido y seguro.
                            </Nosotrosp>                
                        </Nosotrosli>
                    </NosotrosSomos>
                </NosotrosContainer>
            </NosotrosStyle>
        );
    }
}

export default Nosotros;