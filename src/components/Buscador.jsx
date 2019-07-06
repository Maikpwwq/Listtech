import React from 'react';
import '../css/Buscador.css';

import Social from './Social';

import logo from '../imagenes/Listtech-Logo.png'
import carrito from '../imagenes/medios de pago/carrito_ico.png'


import styled from 'styled-components'

const BuscadorStyle = styled.div`
    background-color:#0099cc;
    text-color: white; 
    text-align: center;
    box-sizing: border-box;
    display: block;
    width: 100%;
`;

const BuscadorHeader = styled.div`
    display: grid;
    grid-template: 270px / auto auto auto;
    width: auto;
`;

const BuscadorIngreso = styled.div`
    display: block;
    width: 390px;
`;

const LogoEncabezado = styled.div`
    text-align: left;
`;

/* Style the img logo */
const BuscadorLogo = styled.img`
    border-radius: 100%;
    width: 200px;
    height: 200px;
    pointer-events: none;
    border: 2px solid #black;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

/*const Social = styled.div`
    display: inline;
`;*/

const BuscadorEcommerce = styled.div`
    text-color: white; 
    text-align: right;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    width: 90%;
    position: relative;
    background: #333333;
    border: 1px solid #333333;
`;

const Textinput = styled.input`
    cursor: text;
`;

const Submitinput = styled.input`
    cursor: progress; /* wait pointer all-scroll */
`;

const Buscador = () => (

    <BuscadorStyle>
        <BuscadorHeader>
            <BuscadorIngreso>
                <article className="Ingreso">
                    <a href="/components/inicio.sesion.php">Inicio de sesio&#769;n</a>
                    <a href="/components/registro.php"> Cliente nuevo</a>
                </article>
                <article className="redes">
                    <Social />                    
                </article>
            </BuscadorIngreso>

            <LogoEncabezado>
                <a href="/tienda/">
                    <BuscadorLogo src={logo} alt="" />
                </a>
            </LogoEncabezado>

            <article className="Carriro-Contenedor">
                <article className="Carrito-icono">
                    <a href="../tienda/carrito.php">
                        <img src={carrito} alt="" />
                        <p>CARRO DE COMPRAS</p></a>
                </article>
                <article className="Carrito-contador">
                    <a href="../tienda/carrito.php" className="cantidad">
                        0	</a>
                </article>
            </article>                                       
        </BuscadorHeader>

        <BuscadorEcommerce>
            <form action="/tienda/buscador.php" method="get" name="cms_frm_buscador">
                <Textinput name="dsbusqueda" id="dsbusqueda"
                    placeholder="Qué estás buscando?" />
                <Submitinput value="HACER BU&#769;SQUEDA" />
            </form>
        </BuscadorEcommerce>

    </BuscadorStyle>                        
)

export default Buscador;