import React, { Component } from 'react';

//import { Navlink } from 'react-router-dom'; 
import { connect } from 'react-redux';

/*
 *
//onClick= {this.handleComprar}

                    <div> {active &&
                        <Compras onAddComprar={this.state.comprar}>
                        <h1> Compras </h1>
                        </Compras>
                     } </div>
 * 
 * function handleComprar = (index) => {
    event.preventDefault();
    this.props.onAddComprar(this.state);
    if (window.confirm('Deseas agregar este producto al carrito de compras')) {
        setActive(!active)
        this.setState({
            comprar: this.state.compras.filter((event, i) => {
                return i == index
            })
        })
    }
},
 * const Carrito = props => (
    compras = {props.onAddComprar}
    const [active, setActive] = true;
    const compra = props.location.state;
    <div> {active &&
) 

<FichaProducto compra={compra} />
*/ 
const initState = {};
const agregarCarrito = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_COMPRA':
            console.log ('Agregado al Carrito de compras', action.compra)
    }
    return state
}

class Compras extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Compras',
        }
    }

    render() {
        return (
            <div className="Compras">
                <div className="Compras-container">
                    <header className="Compras-header">
                        <h1>{this.props.title}</h1>
                    </header>
                    <nav className="Compras-app navbar navbar-dark bg-dark">
                        <h2>Articulos</h2>
                        <span className="badge badge-pill badge-light ml-2">
                          ZzzzZZzz  
                        </span>
                    </nav>
                </div>
            </div>
        );
    }
}
// {this.state.compras.lenght}

const mapDispatchToProps = {
    
}

export default connect(null, mapDispatchToProps)(Compras);
