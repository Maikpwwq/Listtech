import React, { Component } from 'react'

// imagenes
import logo from '../../imagenes/Listtech-Control-Acceso.png'

import styled from 'styled-components'

/* Style Nosotros */
const NosotrosStyle = styled.div`
    font - family: Arial, Helvetica, sans - serif;
    text-align: center;
    box-sizing: border-box;    
    background: #0575e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to top,
        #021b79,
        #0575e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to top,
        #021b79,
        #0575e6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

/* Style the container */
const NosotrosContainer = styled.div`
    text-align: center;
    width: 100%;
    background-color: dark-blue;
`

/* Style the header */
const Nosotrosheader = styled.header`
    padding: 15px;
    text-align: center;
    font-size: 35px;
`

/* Style the p string */
const Nosotrosp = styled.p``

const NosotrosSomos = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
    font-size: 27px;

    p {
        font-size: 21px;
    }
`

/*Style the ul 
const Nosotrosul = styled.ul`
    text-align: center;
    list-style-image: url('*.gif');
`;*/

/* Style the li */
const Nosotrosli = styled.li`
    text-align: center;
    list-style: none;
`

const PiePaginaLogo = styled.img`
    border-radius: 6%;
    width: 360px;
    height: auto;
    pointer-events: none;
    border: 2px solid #black;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`

class Nosotros extends Component {
    constructor() {
        super()
        this.state = {
            title: 'NOSOTROS',
        }
    }

    render() {
        return (
            <NosotrosStyle>
                <NosotrosContainer>
                    <Nosotrosheader>
                        <PiePaginaLogo src={logo} alt="IsoLogoTipo-Lisstech" />
                        <Nosotrosp className="text-body-main-white">
                            {' '}
                            A la vanguardia en el suministro de equipos,
                            soluciones de acceso suspendido para trabajos en
                            alturas y, dispositivos para control de acceso del
                            personal. Disen&#771;o e implementacion de sistemas
                            estructurados de redes para distribucio&#769;n y
                            conectividad de voz, datos, electricidad y
                            conexiones especiales.
                        </Nosotrosp>
                    </Nosotrosheader>
                    <NosotrosSomos>
                        <Nosotrosli>
                            <spam className="text-heading-orange">
                                <strong> &#191;QUIENES SOMOS? </strong>
                            </spam>
                            <Nosotrosp className="text-body-main-white">
                                {' '}
                                Somos una organizacio&#769;n con tradicio&#769;n
                                en el sector, orientados a ofrecer soluciones a
                                medida en li&#769;neas de seguridad,
                                <br />
                                industrial y electro&#769;nica, implementando
                                bajo los mejores esta&#769;ndares te&#769;cnicos
                                para garantizar los principios de soporte
                                <br />y calidad.
                            </Nosotrosp>
                        </Nosotrosli>
                        <Nosotrosli>
                            <spam className="text-heading-orange">
                                <strong> MISIO&#769;N </strong>
                            </spam>
                            <Nosotrosp className="text-body-main-white">
                                {' '}
                                Nuestras Li&#769;neas Integrales de Seguridad y
                                Tecnologi&#769;a brindan informacio&#769;n,
                                instalacio&#769;n, confianza y soporte,
                                <br />
                                contamos con talento humano calificados,
                                atendiendo con empati&#769;a a sus
                                requerimientos.
                            </Nosotrosp>
                        </Nosotrosli>
                        <Nosotrosli className="Nosotros-vision">
                            <spam className="text-heading-orange">
                                <strong> VISIO&#769;N </strong>
                            </spam>
                            <Nosotrosp className="text-body-main-white">
                                {' '}
                                En 2020 seremos una excelente
                                compan&#771;i&#769;a, contando con profesionales
                                e&#769;ticos que dara&#769;n solucio&#769;n a
                                cada requerimiento,
                                <br />
                                brindando servicios de calidad para generar
                                acciones que reduzcan, mitiguen y controlen los
                                riesgos que puedan
                                <br />
                                comprometer la integridad de las personas, asi
                                garantizando un ambiente protegido y seguro.
                            </Nosotrosp>
                        </Nosotrosli>
                    </NosotrosSomos>
                </NosotrosContainer>
            </NosotrosStyle>
        )
    }
}

export default Nosotros
