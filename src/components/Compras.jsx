import React from 'react';
import '../css/Compras.css';

//import { Navlink } from 'react-router-dom'; 
import { connect } from 'react-redux';

/*const Carrito = props => (
    compras = {props.onAddComprar}
    <div> {active &&
) */ 

const Compras = props => {
    this.state = { title: 'Compras',}   

    const compra = props.location.state;

    return (
            <div className="Compras">
                <div className="Compras-container">
                    <header className="Compras-header">
                        <h1>{this.props.title}</h1>
                    </header>
                    <nav className="Compras-app navbar navbar-dark bg-dark">
                        <h2>Articulos</h2>
                        <span className="badge badge-pill badge-light ml-2">
                            <FichaProducto compra={compra}/>    
                        </span>
                    </nav>
                </div>
            </div>
    );
}
// {this.state.compras.lenght}

const mapDispatchToProps = {
    
}

export default connect(null, mapDispatchToProps)(Compras);