import React, { Component } from 'react';
import '../css/Marcas.css';
import logo from '../imagenes/Listtech-Logo.png';

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
    backgound:darkblue; 
    text-uppercase:true; 
    text-aling:center;
    display: inblock;
    padding: 5px;
    height: 110px;
    display: -webkit-flex;
    display: flex;    
    -webkit-flex-direction: row;
    flex-direction: row;
    }    
`;

const MenuGrupo = styled.ul`   
    list-style: none;
    display: inline;
    text-align: center;
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
    width: 90px;
    height: 90px;
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

    :active {
    background - color: #4CAF50;
    }

    li::last-child {
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

/*  PopupMenu Productos y servicios */


const Downli = styled.li`
    border-right: 1px solid #bbb;
    float: left;
    color: white;
`;

const MenuPopup = styled.a`
    list-style: none;
    display: block;
    z-index: 100;
    opacity: 0;    
    pointer-events: none;
    border: 2px solid #black;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);

    :hover .MenuDropdown{
    display: block;
    }
`;

const MenuDropdown = styled.div`
    background-color: #f9f9f9;    
    color: black;
    display: none;    
    text - align: left;    
    padding: 30px 30px;
    text - decoration: none;    
    min-width: 260px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 100;

    a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    }

    : hover {
    background - color: #f1f1f1;
    }
`;

/*const Menulink = styled.logo`
    color: #61dafb;
`;*/

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Menu',
            titulo: '',
        }
    }

    //console.log('Renderizado Menu', { this.state.title }, { this.props.titulo })    

    render() {
        
        return (
            <MenuStyle>
                <Menunav>                                            
                    <MenuGrupo id="Menu">
                        <Menuli><figure >
                            <Menuimg src={logo} alt="logo" />
                            <Menua
                             href="https://Dezzpo.com"
                             target="_blank"
                             rel="noopener noreferrer"
                            > Regresar al Inicio.
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
                        <Downli><MenuPopup href="../components/Productos-y-servicios"
                                >PRODUCTOS Y SERVICIOS
                            </MenuPopup>
                            <MenuDropdown>
                                <a href="/producto/candados-y-cerrojos-de-seguridad">
                                    CERRADURAS ELE&#769;CTRONICAS</a>
                                <a href="/producto/candados-y-cerrojos-de-seguridad">
                                    CERRADURAS MECA&#769;NICAS</a>
                                <a href="/producto/control-de-acceso-peatonal-y-vehicular">
                                    CIERRA PUERTAS</a>
                                <a href="/producto/proteccion-e-incendios">
                                    BISAGRAS Y PIVOTES</a>
                                <a href="/producto/proteccion-e-incendios">
                                    REDES CABLEADO ESTRUCTURADO</a>
                                <a href="/producto/cableado-estructurado">
                                    SALIDAS PUSH EMERGENCI&#769;A</a>
                                <a href="/producto/cableado-estructurado">
                                    SENSORES Y HUELGAS ELECTRONICAS</a>
                                <a href="/producto/soluciones-de-acceso-suspendido-alturas">
                                    SOLUCIONES DE ACCESO SUSPENDIDO ALTURAS</a>
                                <a href="/producto/mecanismos-de-suspension">
                                    MECANISMOS DE SUSPENSION</a>
                            </MenuDropdown>                                                                
                        </Downli>
                    </MenuGrupo>
                </Menunav>
            </MenuStyle>            
        );
    }
}

export default Menu;
