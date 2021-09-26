import React, { Component } from 'react'

import styled from 'styled-components'

/* Style Eventos */

const EventosContainer = styled.div`
    text-align: center;
    box-sizing: border-box;
`

class Eventos extends Component {
    constructor(props) {
        super(props)

        this.estado = {}
    }

    render() {
        return <EventosContainer> Cargando ...</EventosContainer>
    }
}

export default Eventos
