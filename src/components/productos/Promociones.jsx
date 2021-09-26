import React, { Component } from 'react'

import styled from 'styled-components'

/* Style Promociones */

const PromocionesContainer = styled.div`
    text-align: center;
    box-sizing: border-box;
`

class Promociones extends Component {
    constructor(props) {
        super(props)

        this.estado = {}
    }

    render() {
        return <PromocionesContainer> Cargando ...</PromocionesContainer>
    }
}

export default Promociones
