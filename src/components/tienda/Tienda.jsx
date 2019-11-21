import React, { Component }  from 'react';

import { connect } from 'react-redux'

import Compras from './Compras.jsx'

import styled from 'styled-components';

const TiendaStyle = styled.form`
    text-align: center;
    box-sizing: border-box;
    display: block;
`;

const TiendaContainer = styled.form`
    
`;

const TiendaProductos = styled.form`
    
`;

const TiendaListaProducto = styled.form`
    
`;

const TiendaProducto = styled.form`
    
`;

const TiendaDescripcion = styled.form`
    
`;

class PaginaTienda extends Component {

    
    render() {

        return (

            <TiendaStyle key={compra.uid}>

                <TiendaContainer>

                    <TiendaProductos>

                        <TiendaListaProducto>

                            <TiendaProducto>

                                <Compras/>

                            </TiendaProducto>

                        </TiendaListaProducto>
                        
                    </TiendaProductos>

                </TiendaContainer>

            </TiendaStyle>
        )
    };
};

const mapestadoToProps = (estado) => {
    return {
        compras: estado.compra.compras
    }
};

export default connect(mapestadoToProps)(PaginaTienda);