import React, { Component } from 'react';

import styled from 'styled-components'

const ContactoStyled = styled.div`
    text-align: center;  
`;

const Contactoheader = styled.div`
    text-align: center;  
`;

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
    }
`;

class Contacto extends Component {
    constructor() {
        super();
        this.state = {
            title: 'CONTACTANOS:',            
        }
    }

    render() {
        return (
            <ContactoStyled>
                <div className="Contacto-container">
                    <Contactoheader>
                        {this.state.title}
                    </Contactoheader>
                    <DatosContacto>
                        <p>  Reciba la cotizacio&#769;n a su correo o comuni&#769;quese con nosotros<br />
                            Y pregunte por nuestros servicios<br />
                        </p>                        
                        <li>Cll 74b # 68 &#45; 36 Bogota&#769; Colombia</li><br />
                        <li>www.Listtech.com.co</li><br />
                        <li> 315 6787036 </li><br />
                    </DatosContacto>                    
                </div>            
            </ContactoStyled>
        );
    }
}

export default Contacto;
