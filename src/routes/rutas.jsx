/* - Componente importancion de las paginas y distribucion de las rutas -  */
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import styled from 'styled-components'

// Rutas y paginas
import NoEncontrado from '../paginas/NoEncontrado'

// Componentes
import PiePagina from '../containers/Pie-pagina'
import Encabezado from '../containers/Encabezado.jsx'

// importar componentes
import Destino from '../paginas/Destino.jsx'
import Contacto from '../components/marca/Contacto.jsx'
import Marcas from '../components/marca/Marcas.jsx'
import Nosotros from '../components/marca/Nosotros.jsx'
import ConoceMas from '../components/marca/ConoceMas.jsx'

import Promociones from '../components/productos/Promociones.jsx'
import Eventos from '../components/marca/Eventos.jsx'
import PoliticaPrivacidad from '../components/marca/Politica-privacidad.jsx'
import Informacion from '../components/marca/Informacion.jsx'

const PaginaDistribucionStyle = styled.div`
    text-align: center;
    box-sizing: border-box;    
`

class Rutas extends React.Component {
    render() {
        return (
            <>
                <PaginaDistribucionStyle>
                    <Router>
                        <Encabezado />
                        <Switch>
                            <Route exact path="/" component={Destino} />
                            <Route
                                exact
                                path="/promociones"
                                component={Promociones}
                            />

                            <Route
                                exact
                                path="/contacto"
                                component={Contacto}
                            />
                            <Route exact path="/marcas" component={Marcas} />
                            <Route
                                exact
                                path="/nosotros"
                                component={Nosotros}
                            />
                            <Route
                                exact
                                path="/conocemas"
                                component={ConoceMas}
                            />
                            <Route exact path="/eventos" component={Eventos} />
                            <Route
                                exact
                                path="/politicaPrivacidad"
                                component={PoliticaPrivacidad}
                            />
                            <Route
                                exact
                                path="/informacion"
                                component={Informacion}
                            />

                            <Route component={NoEncontrado} />
                            <Redirect to="/" />
                        </Switch>
                        <PiePagina />
                    </Router>
                </PaginaDistribucionStyle>
            </>
        )
    }
}

export default Rutas
