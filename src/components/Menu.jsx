import React, { Component } from 'react';

import logo from '../imagenes/Listtech-Logo.png';

import { NavLink } from 'react-router-dom';

/*<script type="text/javascript">
    var dropdown=new TINY.dropdown.init("dropdown", {id: 'menu', active:'menuhover'});
</script> */

import styled from 'styled-components'

/* Style the Menu */
const MenuStyle = styled.div`
    background-color: black;
    text-color: white; 
    text-align: right;
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    z-index: 500;
`;

/*navbar navbar-dark*/
const Menunav = styled.nav`
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */     
    text-align: center;
    display: block;
    padding: 5px;
    height: auto;
    display: -webkit-flex;
    display: flex;    
    -webkit-flex-direction: row;
    flex-direction: row;
    }    
`;

const MenuGrupo = styled.ul`  
    text-uppercase:true; 
    overflow: hidden;
    background-color: #333;
    margin: 0 auto;
    padding: 0;
    width: 90%;
    top: 0;    
`;

/* Style the img logo */
const Menuimg = styled.img`
    border-radius: 100%;
    width: 60px;
    height: 60px;
    pointer-events: none;
    border: 2px solid #black;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

/*position: fixed;*/

const Menuli = styled.li`
    border-right: 1px solid #bbb;
    float: left;  

    &::active {
    background - color: #4CAF50;
    }

    &li::last-child {
    border-right: none;
    }   
`;
    
const Menua = styled.a`
    display: inline-block;
    color: white;
    text - align: center;
    padding: 14px 16px;
    text - decoration: none;
`;

/*  PopupMenu Productos y servicios align: left; */

const DropdownContenido = styled.div`
    background-color: #f9f9f9;    
    display: none;        
    position: absolute; 
    overflow: visible;
    padding: 15px 15px;   
    max-width: 290px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;

    &:hover {
    background - color: #f1f1f1;
    }
`;

const DesplegarMenu = styled.button`
    display: inline-block;
    z-index: 100;       
    pointer-events: auto;
    text-decoration: none;
    color: white;
    border-radius: 3px;
    text - align: center;
    padding: 14px 16px;
    border: 2px solid #black;
    background-color: #333;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);

    &:hover ${DropdownContenido}{
    display: block;
    }
`;

const Desplegar = styled.div`
    border-right: 1px solid #bbb;
    color: white;
    padding: 5px;
    position:relative;
    display: block;

    &:hover ${DesplegarMenu}{
    background-color: #0066ff;
    }
`;

const Contenido = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    
    &:hover {
    background-color: #f1f1f1;
    }
`;

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Menu',
            titulo: '',
        }
    }
   
    render() {

        console.log('Renderizado Menu')        

        return (
            <MenuStyle>
                <Menunav>                                            
                    <MenuGrupo id="Menu">
                        <Menuli><NavLink to="/">                            
                            <Menuimg src={logo} alt="logo" />                            
                        </NavLink></Menuli>

                        <Menuli><figure >                            
                            <Menua
                             href="https://Dezzpo.com"
                             target="_blank"
                             rel="noopener noreferrer"
                            > <Menuimg src={logo} alt="logo" />
                            </Menua>
                        </figure></Menuli>

                        <Menuli><Menua href="../containers/App"
                                >HOME
                        </Menua></Menuli>
                        <Menuli><Menua href="../components/Marcas"
                                >MARCAS
                        </Menua></Menuli>
                        <Menuli ><Menua href="../components/Nosotros"
                                >NOSOTROS
                        </Menua></Menuli>
                        <Menuli><Menua href="../components/ConoceMas"
                                >CONOCE MA&#769;S
                        </Menua></Menuli>
                        <Menuli><Menua href="../components/Contacto"                        
                                >CONTACTO
                        </Menua></Menuli>                                                
                        <Desplegar><DesplegarMenu href="javascript:void(0)"
                                >PRODUCTOS Y SERVICIOS
                            </DesplegarMenu>

                            <DropdownContenido>                                
                                <Contenido href="./productos/1 Cerraduras electrónicas">
                                    1.	LI&#769;NEA CERRADURAS ELECTRO&#769;NICAS</Contenido>
                                <Contenido href="./productos/2 Cerraduras mecánicas">
                                    2.	LI&#769;NEA CERRADURAS MECA&#769;NICAS</Contenido>
                                <Contenido href="./productos/3 Accesorios Soporte">
                                    3.	LI&#769;NEA ACCESORIOS SOPORTE</Contenido>
                                <Contenido href="./productos/4 Salidas PUSH emergencia">
                                    4.	LI&#769;NEA SALIDAS PUSH EMERGENCIA</Contenido>
                                <Contenido href="./productos/5 Cierra puertas">
                                    5.	LI&#769;NEA CIERRA PUERTAS</Contenido>
                                <Contenido href="./productos/6 Sensores y cantoneras electrónicas">
                                    6.	LI&#769;NEA SENSORES Y CANTONERAS ELECTRO&#769;NICAS</Contenido>
                                <Contenido href="./producto/7 Redes cableado estructurado">
                                    7.	LÍNEA REDES CABLEADO ESTRUCTURADO</Contenido>
                                <Contenido href="./productos/8 Acceso suspendido en alturas">
                                    8.	LÍNEA ACCESO SUSPENDIDO EN ALTURAS</Contenido>
                            </DropdownContenido>

                            <DropdownContenido>
                                <Contenido href="/producto/candados-y-cerrojos-de-seguridad">
                                    CERRADURAS ELE&#769;CTRONICAS</Contenido>
                                <Contenido href="/producto/candados-y-cerrojos-de-seguridad">
                                    CERRADURAS MECA&#769;NICAS</Contenido>
                                <Contenido href="/producto/control-de-acceso-peatonal-y-vehicular">
                                    CIERRA PUERTAS</Contenido>
                                <Contenido href="/producto/proteccion-e-incendios">
                                    BISAGRAS Y PIVOTES</Contenido>
                                <Contenido href="/producto/proteccion-e-incendios">
                                    REDES CABLEADO ESTRUCTURADO</Contenido>
                                <Contenido href="/producto/cableado-estructurado">
                                    SALIDAS PUSH EMERGENCI&#769;A</Contenido>
                                <Contenido href="/producto/cableado-estructurado">
                                    SENSORES Y HUELGAS ELECTRONICAS</Contenido>
                                <Contenido href="/producto/soluciones-de-acceso-suspendido-alturas">
                                    SOLUCIONES DE ACCESO SUSPENDIDO ALTURAS</Contenido>
                                <Contenido href="/producto/mecanismos-de-suspension">
                                    MECANISMOS DE SUSPENSION</Contenido>
                            </DropdownContenido>                                                                

                        </Desplegar> 
                    </MenuGrupo>
                </Menunav>
            </MenuStyle>            
        );
    }
}

export default Menu;
