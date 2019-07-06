import React, { Component } from 'react';
import '../css/Footer.css';

import Social from '../components/Social';
import Contacto from '../components/Contacto.jsx';
import Formcontacto from '../components/Form-contacto.jsx';

import Pse from "../imagenes/medios de pago/pse.png";
import Visa from "../imagenes/medios de pago/visa.png";
import AmericanExpress from "../imagenes/medios de pago/americanexpress.png";
import MasterCard from "../imagenes/medios de pago/mastercard.png";
import Paypal from "../imagenes/medios de pago/paypal.png";	
import logo from '../imagenes/Listtech-Logo.png';

import styled from 'styled-components'

const Footerstyle = styled.footer`
    text-align: right;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin: 0;
    display: block;
    position: absolute;
    background: #000;
`;

const FooterLogo = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    pointer-events: none;
    border: 2px solid #black;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const FooterHeader = styled.header`
   
`;

const Footerrow = styled.div`
    display: -webkit-flex;
    display: flex;
    @media (max-width: 600px) {    
    -webkit-flex-direction: column;
    flex-direction: column;
    }
`;

const Footercolumns = styled.div`
    padding: 10px;
    height: auto; 
    text-align: right;
    width: 46%;
    margin: 0 0 0 0;
    display: inline-block;
    vertical-align: top;    
`;

const FooterMenu = styled.nav`
    padding: 20px;
    font-size: 35px;
    font-weight: 400;
`;

const FooterSiguenos = styled.nav`
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

const FooterCopyright = styled.div`
    text-align: center;
    padded:top; 
    spaced:bottom;
    background:#47476b;
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

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Footer',            
        }
    }

    render() {
        return (
            <Footerstyle>
                <Footerrow>
                    <FooterHeader className="Footer-header">
                        {this.props.title}
                    </FooterHeader>            
                    <Footercolumns>                        
                        <FooterMenu>
                            <ul>
                                <li>
                                    <a href="/mas/informacion"><h2>Informacio&#769;n</h2></a>
                                </li>
                                <li>
                                    <a href="/mas/politicas-privacidad"><h3>Poli&#769;ticas de privacidad</h3></a>
                                </li>
                                <li>
                                    <a href="/mas/promociones"><h3>Promociones</h3></a>
                                </li>
                                <li>
                                    <a href="mas/eventos"><h3>Eventos</h3></a>
                                </li>                                                                                                                                        
                            </ul>
                            <Contacto />
                        </FooterMenu>
                    </Footercolumns>
                    <Footercolumns>
                        <FooterSiguenos>                            
                            <ul>                    
                                <li> <h2> LISTTECTH SAS </h2>                                                                        
                                     <FooterLogo src={logo} alt=""/>						                
                                </li>       
                            </ul>
                            <Social />
                            <Formcontacto />
                        </FooterSiguenos>
                    </Footercolumns>
                </Footerrow>

                <Chat>
                    <ChatWhatsapp href="https://api.whatsapp.com/send?phone=573156787036"
                        class="btn_chat" target="_blank" rel="noopener noreferrer"
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

                <FooterCopyright>
                    <p> Copyright 2019 | Listtech SAS Todos los derechos reservados</p>
                </FooterCopyright>

            </Footerstyle>            
        );
    }
}

export default Footer;                               

