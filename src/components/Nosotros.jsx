import React, { Component } from 'react';
import '../css/Nosotros.css';

import styled from 'styled-components'

/* Style Nosotros */
const NosotrosStyle = styled.div`
    text-align: center;
    box-sizing: border-box;    
`;

/* Style the container */
const NosotrosContainer = styled.div`
    text-align: center;
    width:90%;  
    background-color: dark-blue;
`;

/* Style the header */
const Nosotrosheader = styled.header`
    padding: 15px;
    text-align: center;
    font-size: 35px;
`;

/* Style the h1 */
const Nosotrosh1 = styled.h1`
    color:gray;
    font-weight: bold;
    padding: 30px;
    font-size: 35px;
`;

/* Style the h2 string */
const Nosotrosh2 = styled.h2`
    color:orange;        
    padding: 20px;
    font-size: 27px;
`;

/* Style the p string */
const Nosotrosp = styled.p`
    text-color:#ffffff;    
    margin: 2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    font-family:"Times New Roman", Times, Sans-serif;
    font-style:normal;
    padding: 15px;
    font-size: 21px;
`;

const NosotrosSomos = styled.ul`    
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
    font-size: 27px;
`;

/* Style the ul 
const Nosotrosul = styled.ul`
    text-align: center;
    list-style-image: url('*.gif');
`;*/

/* Style the li 
const Nosotrosli = styled.li`
    text-align: center;
`;*/

class Nosotros extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Nosotros',
        }
    }

    render(){
        return (
            <NosotrosStyle>
                <NosotrosContainer>
                    <Nosotrosheader>
                        <Nosotrosh1><strong>  Nosotros </strong></Nosotrosh1>
                    </Nosotrosheader>
                    <NosotrosSomos>
                        <li>
                            <Nosotrosh2><strong> ¿QUIENES SOMOS? </strong></Nosotrosh2>
                            <Nosotrosp>  Somos una organizacio&#769;n con tradicio&#769;n en el sector, orientados a ofrecer soluciones a medida en li&#769;neas de seguridad,<br />
                                industrial y electro&#769;nica, implementando bajo los mejores esta&#769;ndares te&#769;cnicos para garantizar los principios de soporte<br/>
                                y calidad.
                            </Nosotrosp>
                        </li>
                        <li className="Nosotros-mision">
                            <Nosotrosh2><strong> MISIO&#769;N </strong></Nosotrosh2>
                            <Nosotrosp>  Nuestras Li&#769;neas Integrales de Seguridad y Tecnologi&#769;a brindan informacio&#769;n, instalacio&#769;n, confianza y soporte,<br />
                                contamos con talento humano calificados, atendiendo con empati&#769;a a sus requerimientos.
                            </Nosotrosp>
                        </li>
                        <li className="Nosotros-vision">
                            <Nosotrosh2><strong> VISIO&#769;N </strong></Nosotrosh2>
                            <Nosotrosp>  En 2020 seremos una excelente compan&#771;i&#769;a, contando con profesionales e&#769;ticos que dara&#769;n solucio&#769;n a cada requerimiento,<br />
                                brindando servicios de calidad para generar acciones que reduzcan, mitiguen y controlen los riesgos que puedan<br/>
                                comprometer la integridad de las personas, asi garantizando un ambiente protegido y seguro.
                            </Nosotrosp>                
                        </li>
                    </NosotrosSomos>
                </NosotrosContainer>
            </NosotrosStyle>
        );
    }
}

export default Nosotros;