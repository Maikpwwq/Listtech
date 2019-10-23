import React,{ Component }  from 'react';
import { connect } from 'react-redux'

import Fichaproducto from '../productos/Ficha-producto';

import Next from '../../imagenes/next.png';
import Prev from '../../imagenes/prev.png';

import data from '../../constantes/productos/Productos.jsx'


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

class PaginaTienda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
            Compras: data.Compras,
            Compra: data.Compras[0]
        }
        this.showSlides = this.showSlides.bind(this);
        this.PlusSlides = this.PlusSlides.bind(this);
        this.CurrentSlide = this.CurrentSlide.bind(this);
    };

    // Next-previous controls
    PlusSlides = (n) => {
        this.showSlides(this.slideIndex += n);
    };

    // Thumbnail image controls
    CurrentSlide = (n) => {
        this.showSlides(this.slideIndex = n);
    };


    showSlides = (n) => {
        var i = ([]);
        var slides = document.getElementsByClassName("TiendaProducto");
        var descripciones = document.getElementsByClassName("TiendaDescripcion");
        if (n > slides.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < descripciones.length; i++) {
            descripciones[i].className = descripciones[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        descripciones[this.slideIndex - 1].className += " active";
    };

    render() {

        return (
            <TiendaStyle key={compra.uid}>
                <TiendaContainer>

                    <TiendaProductos>

                        <TiendaListaProducto>

                            <TiendaProducto>
                                {
                                    Compras && Compras.map((Compra, index) => (
                                        <NavLink to={{
                                            pathname: `/compras/${index}-${Compra.name}`,
                                            estado: { ...Compras }
                                        }}><Fichaproducto Compra={Compra}
                                            key={`Compra-${index}`}
                                            /*id={Compra._id}*/
                                            /></NavLink>
                                    ))
                                }  
                            </TiendaProducto>

                        </TiendaListaProducto>

                        <Next id="Carrusel-next-imagenes-marcas" onClick="this.PlusSlides(1)">&#10095;>
                        <img src={Next} alt="" />
                        </Next>
                        <Prev id="Carrusel-prev-imagenes-marcas" onClick="this.PlusSlides(-1)">&#10094;>
                        <img src={Prev} alt="" />
                        </Prev>

                    </TiendaProductos>

                    <TiendaDescripcion id="carrusel_imagenes_marcas" >
                        <div style="text-align:center">
                            <span onclick="CurrentSlide(1)"></span>
                            <span class="dot" onClick="this.CurrentSlide(2)"></span>
                            <span class="dot" onClick="this.CurrentSlide(3)"></span>
                        </div>
                    </TiendaDescripcion>

                </TiendaContainer>
            </TiendaStyle>
        )
    };
}

const mapStateToProps = (estado) => {
    return {
        productos: estado.compra.compras
    }
}

export default connect(mapStateToProps)(PaginaTienda);//, CurrentSlide, PlusSlides, showSlides