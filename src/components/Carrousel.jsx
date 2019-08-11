// import React, { ReactChild } from 'react';
import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux'

import Fichaproducto from './Ficha-producto';

import { NavLink } from 'react-router-dom'; 

=======
/*import { connect } from 'react-redux'*/

import '../css/Carrousel.css';

import Fichaproducto from './Ficha-producto';

>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
import next from '../imagenes/next.png';
import prev from '../imagenes/prev.png';

import data from '../productos/Productos.js'

<<<<<<< HEAD
=======
import Conjuntoproductos from '../imagenes/ecommerce-productos/ConjuntoProductos.png';

/* Importar Cerraduras electronicas */
/* AMG100CFingerprint ATSRelojProximidad Handpunch1000 LCD701RD SchlageAD400 SchlageCO100 SchlageCO220 SchlageConnectCentury SchlageCSCamelot SchlageLE SchlageLectoresCTEMT15MT11 SchlageMultitechReaders SchlageNDE SchlageSEncode SchlageSense SchlageWP10354LE SchlageCOSeries SchlageAD400401Series SchlageCO220Series SchlageControlSeries SchlageFSeriesHandPunch SchlageMultitechCredentials*/
import AMG100CFingerprint from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/AMG 100C Fingerprint.png';
/* import ATSRelojProximidad from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/ATS Reloj Proximidad.jpg';
import Handpunch1000 from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Handpunch-1000.jpg';
import LCD701RD from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/LCD 701RD.jpg';
import SchlageAD400 from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage AD400.jpg';
import SchlageCO100 from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage CO 100.jpg';
import SchlageCO220 from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage CO-220.jpg';
import SchlageConnectCentury from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage Connect Century.jpg';
import SchlageCSCamelot from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage CS Camelot.jpg';
import SchlageLE from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage LE.jpg';
import SchlageLectoresCTEMT15MT11 from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage Lectores CTE-MT15-MT11.jpg';
import SchlageMultitechReaders from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage Multi-tech_Readers.jpg';
import SchlageNDE from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage NDE.jpg';
import SchlageSEncode from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage S-Encode.jpg';
import SchlageSense from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage Sense.png';
import SchlageWP10354LE from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage WP-10354 - LE.jpg';
import SchlageCOSeries from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage-CO-Series.jpg';
import SchlageAD400401Series from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage-AD400-401_Series.jpg';
import SchlageCO220Series from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage-CO-220_Series.jpg';
import SchlageControlSeries from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage-Control_Series.jpg';
import SchlageFSeriesHandPunch from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage-F_Series_HandPunch.jpg';
import SchlageMultitechCredentials from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/Schlage-Multi-tech_Credentials.jpg';

/* Importar Cerraduras mecanicas */
/* BehavioralHealth */
import BehavioralHealth from '../imagenes/ecommerce-productos/Cerraduras Mecanicas ControlAcceso/Behavioral Health.jpg';

/* Importar Cierra Puertas */
/* FalconSC60AL */
import FalconSC60AL from '../imagenes/ecommerce-productos/Cierra Puertas/Falcon SC60AL.jpg';

/* Importar Mecanismos de Suspencion */
/*import  from '../imagenes/ecommerce-productos/Mecanismos Suspension/.png';*/

/* Importar Pivotes Bisagras */
/* BisagraContinuaInox */
/*import BisagraContinuaInox from '../imagenes/ecommerce-productos/Pivotes Bisagras/Bisagra Continua Inox.jpg';

/* Importar Redes Cableado Estructurado */
/* Camera887x488 */
/*import Camera887x488 from '../imagenes/ecommerce-productos/Redes Cableado Estructurado/camera-887x488.jpg';

/* Importar Salidas Push Emergencia */
/* BarraAntiPanicoBriton378 */
import BarraAntiPanicoBriton378 from '../imagenes/ecommerce-productos/Salidas Push Emergencia/Barra Anti Panico Briton-378.jpg';

/* Importar Sensores Huelgas Electronicas */
/* SeriesElectricStrikes */
/*import SeriesElectricStrikes from '../imagenes/ecommerce-productos/Sensores Huelgas Electronicas/45-Series-Electric-Strikes.jpg';

/* Importar Acceso Suspendido Alturas */
/* BMU540x272 */
/*import BMU540x272 from '../imagenes/ecommerce-productos/Acceso Suspendido Alturas/BMU-540x272.jpg';

/* Importar Mecanismos Suspension */
/* import  from '../imagenes/ecommerce-productos/Mecanismos Suspension/.png';*/

/**/


>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
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

<<<<<<< HEAD
=======

>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
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
<<<<<<< HEAD
                                    Productos && Productos.map((Producto,index) => (
                                        <NavLink to={{
                                            pathname: `/productos/${index}-${Producto.name}`,
                                            state: {...Productos}
                                        }}><Fichaproducto Producto={Producto}
                                            key={`Producto-${index}`}
                                            /*id={Producto._id}*/
                                        /></NavLink>
=======
                                    Productos.map(Producto => (
                                        <Fichaproducto Producto={Producto}
                                            key={Producto.index}
                                            /*id={Producto._id}*/
                                        />
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
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
<<<<<<< HEAD

const mapStateToProps = (state) => {
    return {
        productos: state.producto.productos
    }
}
    
export default connect(mapStateToProps) (Carrousel);


/* 
const initState = {}
const lineaProductos = (state = initState, action) => {
    switch (Producto.Linea) { 
    case '1 Cerraduras electrónicas':
            return {
                ...state,
                : action.payload
            }
case '2 Cerraduras mecánicas':
            return {
                ...state,
                : action.payload
            }
case '3 Accesorios Soporte':
            return {
                ...state,
                : action.payload
            }
case '4 Salidas PUSH emergencia':
            return {
                ...state,
                : action.payload
            }
case '5 Cierra puertas':
            return {
                ...state,
                : action.payload
            }
case '6 Sensores y cantoneras electrónicas':
            return {
                ...state,
                : action.payload
            }
case '7 Redes cableado estructurado':
            return {
                ...state,
                : action.payload
            }
case '8 Acceso suspendido en alturas':
            return {
                ...state,
                : action.payload
            }
    default:
            return state;
    }
}

var slideIndex = [1,1];
showSlides(slideIndex);
=======
    
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

>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
        this.slideIndex = 1;
        this.showSlides = this.showSlides.bind(this);
        this.showSlides = this.showSlides(this.slideIndex);
    }

<<<<<<< HEAD
// Class the members of each slideshow group with different CSS classes
var slideId = [
"1 Cerraduras electrónicas", 
"2 Cerraduras mecánicas"
"3 Accesorios Soporte"
"4 Salidas PUSH emergencia"
"5 Cierra puertas"
"6 Sensores y cantoneras electrónicas"
"7 Redes cableado estructurado"
"8 Acceso suspendido en alturas"
]

showSlides(1, 0);
showSlides(1, 1);

    // Next/previous controls
    PlusSlides= (n, no) => {
        this.showSlides(this.slideIndex[no] += n, no);
    }

    // Thumbnail image controls
    CurrentSlide= (n,no) => {
        this.showSlides(this.slideIndex[no] = n, no);
    } 

    showSlides= (n, no) => {
        console.log('Renderizado Productos');
        var i = ([]);
        var slide = document.getElementsByClassName(slideId[no]);        
        // var dots
        var descripciones = document.getElementsByClassName("CarrouselDescripcion");

        if(n > slides.length) { this.slideIndex[no] = 1 }
        if (n < 1) { this.slideIndex[no] = slides.length }
=======
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
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < descripciones.length; i++) {
            descripciones[i].className = descripciones[i].className.replace(" active", "");
        }
<<<<<<< HEAD
        slides[this.slideIndex[no] - 1].style.display = "block";
        descripciones[this.slideIndex - 1].className += " active";
    }
*/
=======
        slides[this.slideIndex - 1].style.display = "block";
        descripciones[this.slideIndex - 1].className += " active";
    }
*/

/*const Carrousel = (props) => {*/
>>>>>>> c3abce94de5f2b226248ef01468d2c1030a9f629
