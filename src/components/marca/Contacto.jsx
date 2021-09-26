import React, { Component } from 'react'

import styled from 'styled-components'

const ContactoStyled = styled.div` 
    text-align: center;
    background - color: #3c3c3c;
    margin: 0 auto;
    padding: 1rem 1rem;
    height:auto;
    width: 100%;
`

const Contactoheader = styled.div`
    text-align: center;
`

const DatosContacto = styled.div`
    padding: 16px;
    font-size: 29px;
    font-weight: 390;
    text-align: center;
    font - family: Arial, Helvetica, sans - serif;
    letter-spacing:1.2px;
    margins:6em 0 0 0;
    color:#ffffff; 

    p{
    font-size: 24px;
    font-weight: 290;
    }

    li{
    font-size: 21px;
    font-weight: 260;
    list-style: none;
    }
`

const Chat = styled.div`
    text-align: center;
    display: inblock;
`

const ChatWhatsapp = styled.a`
    width: auto;
    height: auto;
    // background: green;
`

class Contacto extends Component {
    constructor() {
        super()
        this.state = {
            title: 'CONTACTANOS:',
        }
    }

    render() {
        return (
            <ContactoStyled id="contacto">
                <div className="Contacto-container">
                    <Contactoheader>
                        <span className="text-body-main-white">
                            <strong> {this.state.title} </strong>
                        </span>
                    </Contactoheader>
                    <DatosContacto>
                        <p>
                            {' '}
                            Reciba la cotizacio&#769;n a su correo o
                            comuni&#769;quese con nosotros
                            <br />
                            Y pregunte por nuestros servicios
                            <br />
                        </p>
                        <li>
                            319 6138057
                            <Chat>
                                <ChatWhatsapp
                                    href="https://api.whatsapp.com/send?phone=573196138057"
                                    class="btn_chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chatea en li&#769;nea
                                </ChatWhatsapp>
                            </Chat>
                        </li>
                        <li>
                            Calle 29 sur # 51f &#45; 71, Santa Rita &#45;
                            <br />
                            Bogota&#769; Colombia
                        </li>
                        <li>www.Listtech.co</li>
                    </DatosContacto>
                </div>
            </ContactoStyled>
        )
    }
}

export default Contacto
