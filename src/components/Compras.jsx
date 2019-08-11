<<<<<<< HEAD
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
=======
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
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
            <div className="Compras">
                <div className="Compras-container">
                    <header className="Compras-header">
                        <h1>{this.props.title}</h1>
                    </header>
                    <nav className="Compras-app navbar navbar-dark bg-dark">
                        <h2>Articulos</h2>
                        <span className="badge badge-pill badge-light ml-2">
<<<<<<< HEAD
                            <FichaProducto compra={compra}/>    
=======
                            
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
                        </span>
                    </nav>
                </div>
            </div>
<<<<<<< HEAD
    );
}
// {this.state.compras.lenght}

const mapDispatchToProps = {
    
}

export default connect(null, mapDispatchToProps)(Compras);
=======
        );
    }
}

// {this.state.compras.lenght}

export default Compras;
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
