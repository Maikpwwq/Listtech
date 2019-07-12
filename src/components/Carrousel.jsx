// import React, { ReactChild } from 'react';
import React, { Component } from 'react';
/*import { connect } from 'react-redux'*/

import '../css/Carrousel.css';

import Fichaproducto from './Ficha-producto';

import next from '../imagenes/next.png';
import prev from '../imagenes/prev.png';

import data from '../productos/Productos.js'

import styled from 'styled-components'

/* Style Carrousel */
const CarrouselStyle = styled.div`
    background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align: center;
    box-sizing: border-box;
`;

const Carousel = styled.div`
    width: 800px;
    height: 600px; 
    display: inline-block;
    position: sticky;
    overflow: scroll
    background: #1F1C2C;  
    background: -webkit - linear - gradient(to top, #928DAB, #1F1C2C); 
    background: linear - gradient(to top, #928DAB, #1F1C2C);
`;

/* Style  */

const CarrouselProductos = styled.div`    
    float: left;
    /*width: auto;    
    height: auto; */
    margin: 5px;   

    &:after {
    content:'';
    display: block;
    text-align: center;
    width: 300px;
    height: 300px;
    outline: 5px solid #61DAFE;
    position: relative;
    }
`;

/*`translateX(-${ property.index * (100 / properties.length) }%)`*/

const CarrouselWrapper = styled.div`
    position: relative;
    display: -webkit - flex; /* Safari */
    -webkit - align - items: center; /* Safari 7.0+ */
    display: flex;
    align - items: center;
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);       
`;

const CarrouselListaProducto = styled.div`
    position: absolute;
    top: auto; 
    right: auto; 
    bottom: auto; 
    left: auto; 
    z-index: auto; 
    max-width: 100 %;
    margin: auto;            

    .Producto {
    flex: 1;
    min-width: 460px;
    }

    .FichaProducto {
    flex: 1;
    min-width: 200px;
    opacity: 0.7;
    transform: scale(0.8);
    box-shadow: none;
    background-color: white;
    border-color: white;
    transition: opacity 300ms linear, border-color 300ms linear, background-color 300ms linear,transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
        .FichaDetalles {
        opacity: 0;
        transition: opacity 150ms linear;
        }
    }    
`;

const CarrouselDescripcion = styled.div`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    
    &:hover {
    background-color: #717171;
    }
`;

const Prev = styled.button` 
    cursor: pointer;
    position: absolute;
    vertical-align: middle;
    top: 50 %;
    width: auto;
    margin - top: -22px;
    padding: 16px;
    color: white;
    font - weight: bold;
    font - size: 18px;
    transition: 0.6s ease;
    border - radius: 0 3px 3px 0;
    user - select: none;
    left: 0;

    &:hover {
    background-color: rgba(0,0,0,0.8);
    }

`;

const Next = styled.button` 
    cursor: pointer;
    position: absolute;
    top: 50 %;
    width: auto;
    margin - top: +22px;
    padding: 16px;
    color: white;
    font - weight: bold;
    font - size: 18px;
    transition: 0.6s ease;
    border - radius: 0 3px 3px 0;
    user - select: none;
    right: 0;
    border - radius: 3px 0 0 3px;
    
    &:hover {
    background-color: rgba(0,0,0,0.8);
    }

`;


class Carrousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Productos: data.Productos,
            Producto: data.Productos[0]
        };    
    }

    nextProducto = () => {
        const nuevoindex = this.state.Producto.index + 1;
        this.setState({
                Producto: data.Productos[nuevoindex]
            })
    }

    prevProducto = () => {
        const nuevoindex = this.state.Producto.index - 1;
        this.setState({
            Producto: data.Productos[nuevoindex]
        })
    }

    currentSlide = () => {
        const actualindex = this.state.Producto.index;
        console.log("Actual", actualindex);
    }

    render() {

        const { Productos, Producto } = this.state;

        console.log("Seleccion", Producto);

        return (
            <CarrouselStyle >

                <Carousel>

                    <CarrouselProductos>

                        <CarrouselListaProducto>
                            <CarrouselWrapper>
                                {
                                    Productos.map(Producto => (
                                        <Fichaproducto Producto={Producto}
                                            key={Producto.index}
                                            /*id={Producto._id}*/
                                        />
                                    ))
                                }       
                            </CarrouselWrapper>
                        </CarrouselListaProducto>

                        <Next id="Carrusel-next-producto"
                            onClick={() => this.nextProducto()}
                            disabled={Producto.index === data.Productos.length - 1}
                        > Siguiente
                            <img src={next} alt="" />
                        </Next>
                        <Prev id="Carrusel-prev-producto"
                            onClick={() => this.prevProducto()}
                            disabled={Producto.index === 0}
                        > Anterior
                            <img src={prev} alt="" />
                        </Prev>

                    </CarrouselProductos>

                    <CarrouselDescripcion id="carrusel_imagenes_marcas" >
                        <div>
                            <span className="dot" onClick="currentSlide(1)">
                            </span>
                            <span className="dot" onClick="CurrentSlide(2)">
                            </span>
                            <span className="dot" onClick="CurrentSlide(3)">
                            </span>
                        </div>
                    </CarrouselDescripcion>

                </Carousel>

            </CarrouselStyle>   
    )
    };
}

/*key = {`Carrousel-${index}`}*/
    
export default Carrousel;



/*= ({ producto, i }) =>*/

/* var slideIndex = [1,1];
showSlides(slideIndex);

// Class the members of each slideshow group with different CSS classes 
var slideId = ["CarrouselListaProducto1", "CarrouselListaProducto2"]
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n,no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

function showSlides(n) {
    console.log('Renderizado Productos');
    var i;
    var slides = document.getElementsByClassName("CarrouselProducto");
    var dots = document.getElementsByClassName("CarrouselDescripcion");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}*/




// import * as comprar from '../Compras.json';
// compras: [...this.state.compras, compra]
// const Fichaproducto = ({ titulo, foto, marca, descripcion, garantia, precio, solicitar }) => {

/*const [active, setActive] = true;

function handleComprar = (index) => {
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

//onClick= {this.handleComprar}

                    <div> {active &&
                        <Compras onAddComprar={this.state.comprar}>
                        <h1> Compras </h1>
                        </Compras>
                     } </div>

        this.slideIndex = 1;
        this.showSlides = this.showSlides.bind(this);
        this.showSlides = this.showSlides(this.slideIndex);
    }

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
        var slides = document.getElementsByClassName("CarrouselProducto");
        var descripciones = document.getElementsByClassName("CarrouselDescripcion");
        if(n > slides.length) { this.slideIndex = 1 }
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
*/

/*const Carrousel = (props) => {*/