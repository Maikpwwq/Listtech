import React, { Component } from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// importacion components
import Social from '../components/marca/Social';
import Contacto from '../components/marca/Contacto.jsx';
import Formcontacto from '../components/usuarios/Form-contacto.jsx';
// importacion imagenes
import Pse from "../imagenes/medios de pago/pse.png";
import Visa from "../imagenes/medios de pago/visa.png";
import AmericanExpress from "../imagenes/medios de pago/americanexpress.png";
import MasterCard from "../imagenes/medios de pago/mastercard.png";
import Paypal from "../imagenes/medios de pago/paypal.png";	

import logo from '../imagenes/Listtech-Control-Acceso.png';

import indicador from '../imagenes/redes/indentador.png';

// Styled Components
import styled from 'styled-components'

const PiePaginastyle = styled.PiePagina`
    background - color: #3c3c3c;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    height:auto;
    width: 100%;
`;

const PiePaginaComponent = styled.PiePagina`
    text-align: right;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin: 0;
    display: block;
    position: absolute;
    background: #000;
`;

const PiePaginaLogo = styled.img`
    border-radius: 6%;
    width: 360px;
    height: auto;
    pointer-events: none;
    border: 2px solid #black;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const PiePaginaHeader = styled.header`
   
`;

const PiePaginarow = styled.div`
    display: -webkit-flex;
    display: flex;
    @media (max-width: 600px) {    
    -webkit-flex-direction: column;
    flex-direction: column;
    }
`;

const PiePaginacolumns = styled.div`
    padding: 10px;
    height: auto; 
    text-align: right;
    width: 46%;
    margin: 0 0 0 0;
    display: inline-block;
    vertical-align: top;    
`;

const PiePaginaMenu = styled.nav`
    padding: 19px;
    font-size: 36px;
    font-weight: 390;
    display: grid;
    grid-template-rows: auto auto auto auto auto; 

    ul{
    list-style-type: none;
    }

    li{
    display: inline-block;
    }
`;

const EnlacesMenu = styled.a` 
    display: inline;
    align: left;
    width: 100%;
`;

const PiePaginaSiguenos = styled.nav`
    text-align: center;
    display: block;
`;

const Chat = styled.div` 
    text-align: center;
    display: inblock;
`;

const ChatWhatsapp = styled.a` 
    width: auto;    
    height: auto;
    background:green;
`;

const FormasPago = styled.ul`
    text-align: center;
    height: 100 px;
    list-style: none;
    overflow: hidden;
    background: white;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    top: 0; 
    display: flex;
    flex-direction: column;
`;

const ListaPago = styled.li` 
    border-bottom: 1px solid #0099cc;
    float: left;  
    display: block;
    width: auto;    
`;

const MediosPago = styled.a`
    padding: 14px 16px;
    display: inline-block;
`;

const PiePaginaCopyright = styled.div`
    text-align: center;
    padded:top; 
    spaced:bottom;
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

/*
<script type="text/javascript" src="../mibew/js/compiled/chat_popup.js">
</script>

<script type="text/javascript">
    window.onload=function(){
    //Iniciamos el servicio de chat con el id y url que podemos encontrar al generar codigo.
    //Tener en cuenta que el id y url pueden cambiar, verificar al generar codigo de boton
        Mibew.ChatPopup.init({
            "id": "5adf81f76bafbef5", "url": "\/mibew\/chat?locale=es",
            "preferIFrame": true, "modSecurity": false, "forceSecure": false, "width": 640,
            "height": 480, "resizable": true, "styleLoader": "\/mibew\/chat\/style\/popup"
        });
        //Abrimos la ventana de chat
        //Tener en cuenta que el id puede cambiar, verificar al generar codigo de boton
        Mibew.Objects.ChatPopups['5adf81f76bafbef5'].open();
    }
 </script>
 */

class PiePagina extends Component {
    constructor() {
        super();
        this.state = {
            title: 'PiePagina',            
        }
    }

    render() {
        return (
            <PiePaginastyle>
                <PiePaginaComponent>
                    <PiePaginarow>

                        <PiePaginaHeader
                            className="PiePagina-header">
                            {this.props.title}
                        </PiePaginaHeader>

                        <PiePaginacolumns>
                            <PiePaginaMenu>

                                <ul>
                                    <li>
                                        <EnlacesMenu>
                                            <img src={indicador} alt="indicador" />
                                            <NavLink
                                                to="/informacion/"
                                            > Informacio&#769;n
                                            </NavLink>                                           
                                        </EnlacesMenu>
                                    </li>
                                    <li>
                                        <EnlacesMenu>                                           
                                            <img src={indicador} alt="indicador" />
                                            <NavLink
                                                to="/politicaPrivacidad/"
                                            > Poli&#769;ticas de privacidad
                                            </NavLink>                                           
                                        </EnlacesMenu>
                                    </li>
                                    <li>
                                        <EnlacesMenu>
                                            <img src={indicador} alt="indicador" />
                                            <NavLink
                                                to="/promociones/"
                                            > Promociones
                                            </NavLink>                                           
                                        </EnlacesMenu>
                                    </li>
                                    <li>
                                        <EnlacesMenu>                                            
                                            <img src={indicador} alt="indicador" />
                                            <NavLink
                                                to="/eventos/"
                                            > Eventos
                                            </NavLink>                                           
                                        </EnlacesMenu>
                                    </li>
                                </ul>

                                <Contacto />

                            </PiePaginaMenu>
                        </PiePaginacolumns>

                        <PiePaginacolumns>
                            <PiePaginaSiguenos>
                                <ul>
                                    <li>
                                        <PiePaginaLogo src={logo} alt="" />
                                    </li>
                                </ul>
                                <Social />
                                <Formcontacto />
                            </PiePaginaSiguenos>
                        </PiePaginacolumns>

                    </PiePaginarow>

                    <Chat>
                        <ChatWhatsapp
                            href="https://api.whatsapp.com/send?phone=573156787036"
                            class="btn_chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Chatea en li&#769;nea
                        </ChatWhatsapp>
                    </Chat>

                    <FormasPago>
                        <ListaPago>
                            <MediosPago>
                                <img src={Pse} alt="Pse" /></MediosPago>
                            <MediosPago>
                                <img src={Visa} alt="Visa" /></MediosPago>
                            <MediosPago>
                                <img src={AmericanExpress} alt="americanexpress" /></MediosPago>
                            <MediosPago>
                                <img src={MasterCard} alt="mastercard" /></MediosPago>
                            <MediosPago>
                                <img src={Paypal} alt="paypal" /></MediosPago>
                        </ListaPago>
                    </FormasPago>

                    <PiePaginaCopyright>
                        <p> Copyright 2019 | Listtech SAS Todos los derechos reservados</p>
                    </PiePaginaCopyright>

                </PiePaginaComponent>

            </PiePaginastyle>            
        );
    }
}

export default connect (PiePagina);                               