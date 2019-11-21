import React, { Component } from 'react';

import Buscador from './Buscador.jsx';
import Menu from '../components/administracion/Menu.jsx';

import styled from 'styled-components'

/* Style the Encabezado */

const EncabezadoStyle = styled.div`
    text-align: center;    
    box-sizing: border-box;   
`;

const EncabezadoComponent = styled.Encabezado`
    background - color: #0099cc;
    padding: 30px;    
    display: inline;
    text - align: center;
    font - size: 35px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
`;

class Encabezado extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Encabezado',
        }
    }

    render() {
        return (
            <EncabezadoStyle>
                <EncabezadoComponent>
                    <Buscador />
                    <Menu />
                </EncabezadoComponent>
            </EncabezadoStyle>            
        );
    }
}

export default Encabezado;   