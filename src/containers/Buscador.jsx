import React, { Component } from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// importar accion pagina Modal  
import { setModal } from '../actions/actions.js';
import useModal from '../hooks/useModal';

// Cargar Componentes
import Modal from '../components/micelaneos/Modal.jsx';
import Social from '../components/marca/Social';

import InicioSesion from '../components/usuarios/Inicio-sesion';
import Registro from '../components/usuarios/Registro';
// import BtnCerrarSesion from '../usuarios/Cerrar-sesion.jsx';

// Cargar imagenes
import logo from '../imagenes/Listtech-Logo.png'
import carrito from '../imagenes/medios de pago/carrito_ico.png'

// Stylo de los componentes del Buscador
import styled from 'styled-components'

const BuscadorStyle = styled.div`
    background: #1488CC;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    justify-content: center;
    text-color: white; 
    text-align: center;
    box-sizing: border-box;
    display: block;
    width: 100%;
`;

const BuscadorHeader = styled.div`
    display: grid;
    grid-template: 190px / auto auto auto;
    width: auto;
    vertical-align: middle;
    text-align: center;
    padding: 10px 10px;
`;

const BuscadorIngreso = styled.div`
    display: block;
    width: 100%;
    padding: 10px 10px;
`;

const Redes = styled.div`
    align: left;
    border-radius: 9%;
`;


const LogoEncabezado = styled.div`
    align: left;
`;

/* Style the img logo */
const BuscadorLogo = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    pointer-events: none;
    border: 2px solid #black;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const Acceder = styled.div`
    
`;

const CarroCompras = styled.div`
    align: center;
    padding: 10px 10px;
`;

/*const Social = styled.div`
    display: inline;
`;*/

const BuscadorEcommerce = styled.div`
    text-color: black; 
    align: left;
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
    width: 80%;
    text-color: black; 
    align: left;
`;

const Submitinput = styled.input`
    cursor: progress; /* wait pointer all-scroll */
    width: 20%;
    padding: 0px 5px;
    color: black;
    text-align: center;
    background: #bfbfbf;
`;

const Buscador = props => {

    const modal = useModal();

    const mostrarModal = () => {
        setModal(!modal)
    }

    return (
        <BuscadorStyle>
            <BuscadorHeader>

                <BuscadorIngreso mostrarModal={mostrarModal}>

                    <Modal
                        show={modal}
                        close={mostrarModal}
                    >
                        {props.inicioSesion ?
                            <Registro />
                            :
                            <div className="Modal-inicioSesion">
                                <InicioSesion />
                            </div>
                        }
                    </Modal>

                    < Acceder>

                        {props.inicioSesion ?

                            <NavLink
                                to="/perfil/"
                            > Cuenta mi perfil
                                </NavLink>
                            :
                            <NavLink
                                to="/inicioSesion/"
                            > Inicio de sesio&#769;n
                                </NavLink>
                        }

                        <NavLink
                            to="/registro/"
                        > Cliente nuevo
                            </NavLink>                        

                    </Acceder>

                    <Redes>
                        <Social />
                    </Redes>

                </BuscadorIngreso>

                <LogoEncabezado>
                    <a href="/tienda/">
                        <BuscadorLogo src={logo} alt="" />
                    </a>
                </LogoEncabezado>

                <CarroCompras>
                    <article className="Carrito-icono">
                        <a href="../tienda/carrito.php">
                            <img src={carrito} alt="" />
                            <p>CARRO DE COMPRAS</p></a>
                    </article>
                    <article className="Carrito-contador">
                        <NavLink to="/compras">
                            0	</NavLink>
                    </article>
                </CarroCompras>
            </BuscadorHeader>

            <BuscadorEcommerce>
                <form
                    action="/tienda/buscador.php"
                    method="get"
                    name="cms_frm_buscador">

                    <Textinput name="dsbusqueda" id="dsbusqueda"
                        placeholder="Qué estás buscando?" />

                    <Submitinput value="HACER BU&#769;SQUEDA" />
                </form>
            </BuscadorEcommerce>

        </BuscadorStyle>
    )
};

const mapDispatchToProps = {
    setModal,   
}

const mapStateToProps = estado => {
    return {
        inicioSesion: estado.inicioSesion,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);   