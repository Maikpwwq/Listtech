import React from 'react'

import Marcas from '../components/marca/Marcas.jsx'
import Productosyservicios from '../components/productos/Productos-y-servicios.jsx'

import styled from 'styled-components'

/* Style Main */

/* Style the body Container for flexboxes */
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
const Maingrupo = styled.main`
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    padding: 0;
    width: 100%;
    background: #0575e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to top,
        #021b79,
        #0575e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to top,
        #021b79,
        #0575e6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Mainrow = styled.div`
    display: grid;
    grid-template-columns: 360px auto 290px;
`

const Maincolumns = styled.div`
    padding: 10px;
    height: 600px;
`

const Destino = () => (
    <Maingrupo>
        <Mainrow>
            <Maincolumns>
                <Productosyservicios />
            </Maincolumns>
            <Maincolumns>
                
            </Maincolumns>
        </Mainrow>

        <Marcas />
    </Maingrupo>
)

export default Destino
