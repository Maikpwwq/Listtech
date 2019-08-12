import React from 'react';
import { connect } from 'react-redux'
import next from '../imagenes/next.png';
import prev from '../imagenes/prev.png';

import styled from 'styled-components'


const Tienda = props => {
    
    this.state = {
        slideIndex: 1,
    }
    this.showSlides = this.showSlides.bind(this);
    this.PlusSlides = this.PlusSlides.bind(this);
    this.CurrentSlide = this.CurrentSlide.bind(this);      

    // Next/previous controls
    PlusSlides= (n) => {
        this.showSlides(this.slideIndex += n);
    }

    // Thumbnail image controls
    CurrentSlide= (n) => {
        this.showSlides(this.slideIndex = n);
    }

 
    showSlides= (n) => {
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
    }

    return (
        <TiendaStyle key={}>
            <TiendaContainer>

                <TiendaProductos>

                    <TiendaListaProducto>

                        <TiendaProducto>
                            <Titulo />
                            <a href="/components/Tienda">
                                <productoimg src="" alt="" />
                            </a>
                            <Precio />
                        </TiendaProducto>

                        <TiendaProducto>
                            <Titulo />
                            <a href="/components/Tienda">
                                <productoimg src="" alt="" />
                            </a>
                            <Precio />
                        </TiendaProducto>

                        <TiendaProducto>
                            <Titulo />
                            <a href="/components/Tienda">
                                <productoimg src="" alt="" />
                            </a>
                            <Precio />
                        </TiendaProducto>

                    </TiendaListaProducto>
                    
                    <Next id="Carrusel-next-imagenes-marcas" onClick="this.PlusSlides(1)">&#10095;>
                        <img src={next} alt="" />
                    </Next>
                    <Prev id="Carrusel-prev-imagenes-marcas" onClick="this.PlusSlides(-1)">&#10094;>
                        <img src={prev} alt="" />
                    </Prev>

                </TiendaProductos>

                <TiendaDescripcion id="carrusel_imagenes_marcas" >
                    <div style="text-align:center">
                        <span onclick="currentSlide(1)"></span>
                        <span class="dot" onClick="this.CurrentSlide(2)"></span>
                        <span class="dot" onClick="this.CurrentSlide(3)"></span>
                    </div>
                </TiendaDescripcion>

            </TiendaContainer>
        </TiendaStyle>
    )
};

export default connect(currentSlide, plusSlides, showSlides)(Tienda);