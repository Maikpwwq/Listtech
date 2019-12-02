import React, { Component } from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import PropTypes from 'prop-types';

// Cargar Componentes
import Fichaproducto from '../productos/Ficha-producto';

/* Style Pagina Grupo Compras */
import styled from 'styled-components'

const ResumenCompras = styled.div`

`;

const ComprasContainer = styled.div`

`;

const btnPagos = styled.button`

`;

/* const CarruselStyle = styled.div`

`; */

// {this.estado.compras.lenght}

class Compras extends Component {
    constructor() {
        super();
        this.estado = {
            title: 'Compras',
        }
    }

    handlePagar = (index) => {
        event.preventDefault();
        this.props.onAddComprar(this.estado);
        if (window.confirm('Ahora se liquidara su orden de pago')) {
            setActive(!active)
            this.setState({
                comprar: this.estado.compras.filter((event, i) => {
                    return i == index
                })
            })
        }
    };    

    render() {

        const { index, titulo, imagen, precio, marca, descripcion, garantia, solicitud } = Producto

        const initestado = {};
        const agregarCarrito = (estado = initestado, action) => {
            switch (action.type) {
                case 'ADD_COMPRA':
                    console.log('Agregado al Carrito de compras', action.compra)
            }
            return estado
        };

        const Carrito = props => (
            this.compras = { props.onAddComprar }
        );

        const [active, setActive] = true;
        const compra = props.location.estado;

        return (
            <ResumenCompras>
                <ComprasContainer>

                    {active &&
                        <Compras onAddComprar={this.estado.comprar}>
                            <h1> Compras </h1>
                        </Compras>
                        <nav className="Compras-app navbar navbar-dark bg-dark">
                            <h2>Articulos</h2>
                            <span className="badge badge-pill badge-light ml-2">
                                {
                                    this.Compras && this.Compras.map((Compra, index) => (
                                        <NavLink to={{
                                            pathname: `/compras/${index}-${Compra.name}`,
                                            estado: { ...Compras }
                                        }}><Fichaproducto Compra={Compra}
                                            key={`Compra-${index}`}
                                            /*id={Compra._id}*/
                                            />
                                        </NavLink>
                                    ))
                                }
                            </span>
                        </nav>
                    };

                </ComprasContainer>

                <btnPagos onClick={this.handlePagar} />

            </ResumenCompras>
        );
    }
}

Comentario.defaultProps = {
    
}

Comentarios.propTypes = {
    irPagos: PropTypes.func.isRequired,
    compras: PropTypes.array.isRequired,    
    Compra: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        pagar: (pagos) => dispatchEvent(irPagos(pagos)),
    }
};

export default connect(null, mapDispatchToProps)(Compras);