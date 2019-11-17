import React, { Component } from 'react';

import styled from 'styled-components'

/* Style Informacion */

const InformacionContainer = styled.div`
    text-align: center;
    box-sizing: border-box;    
`;

class Informacion extends Component {

    constructor(props) {
        super(props);

        this.estado = {

        };
    };

    render() {
        return (
            <InformacionContainer> Cargando ...</InformacionContainer>
               )
    };
};

export default Informacion;