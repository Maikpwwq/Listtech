import React, { Component } from 'react';
import '../css/Compras.css';


/*const Carrito = props => (
    compras = {props.onAddComprar}
) */ 

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
                            
                        </span>
                    </nav>
                </div>
            </div>
        );
    }
}

// {this.state.compras.lenght}

export default Compras;