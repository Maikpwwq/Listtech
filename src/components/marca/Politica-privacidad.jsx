import React, { Component } from 'react'

import styled from 'styled-components'

/* Style PoliticaPrivacidad */

const PoliticaPrivacidadContainer = styled.div`
    text-align: center;
    box-sizing: border-box;
`

class PoliticaPrivacidad extends Component {
    constructor(props) {
        super(props)

        this.estado = {}
    }

    render() {
        return (
            <PoliticaPrivacidadContainer>
                {' '}
                Cargando ...
            </PoliticaPrivacidadContainer>
        )
    }
}

export default PoliticaPrivacidad
