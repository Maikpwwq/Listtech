import React, { Component } from 'react';

import Buscador from '../components/productos/Buscador.jsx';
import Menu from '../components/administracion/Menu.jsx';

import styled from 'styled-components'

/* Style the header */

const HeaderStyle = styled.div`
    text-align: center;    
    box-sizing: border-box;   
`;

const HeaderComponent = styled.header`
    background - color: #0099cc;
    padding: 30px;    
    display: inline;
    text - align: center;
    font - size: 35px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
`;

class Header extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Header',
        }
    }

    render() {
        return (
            <HeaderStyle>
                <HeaderComponent>
                    <Buscador />
                    <Menu />
                </HeaderComponent>
            </HeaderStyle>            
        );
    }
}

export default Header;   