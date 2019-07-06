import React, { Component } from 'react';
/*import '../css/Contacto.css';*/

import styled from 'styled-components'

const ContactoStyled = styled.div`
    text-align: center;  
`;

const Contactoheader = styled.div`
    text-align: center;  
`;

const DatosContacto = styled.div`
    
`;

class Contacto extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Contacto',            
        }
    }

    render() {
        return (
            <ContactoStyled>
                <div className="Contacto-container">
                    <Contactoheader>
                        {this.props.title}
                    </Contactoheader>
                    <DatosContacto>
                        <h3> Conta&#769;ctanos </h3>
                        <p>  Reciba la cotizacio&#769;n a su correo o comuni&#769;quese con nosotros<br />
                            Y pregunte por nuestros servicios<br />
                        </p>                        
                        <li>Cll 74b # 68 &#45; 36   Bogota&#769; Colombia</li>
                        <li>www.Listtech.com.co</li>
                        <li> 315 6787036 </li>
                    </DatosContacto>                    
                </div>            
            </ContactoStyled>
        );
    }
}

export default Contacto;
