
import React from 'react';
import { connect } from 'react-redux'

import '../css/Carrousel.css';

/*import Fichaproducto from './Ficha-producto';*/
import Fichaproducto from '../imagenes/ecommerce-productos/ConjuntoProductos.png';

/* Importar Cerraduras electronicas */
/* AMG100CFingerprint ATSRelojProximidad Handpunch1000 LCD701RD SchlageAD400 SchlageCO100 SchlageCO220 SchlageConnectCentury SchlageCSCamelot SchlageLE SchlageLectoresCTEMT15MT11 SchlageMultitechReaders SchlageNDE SchlageSEncode SchlageSense SchlageWP10354LE SchlageCOSeries SchlageAD400401Series SchlageCO220Series SchlageControlSeries SchlageFSeriesHandPunch SchlageMultitechCredentials*/
import AMG100CFingerprint from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/AMG 100C Fingerprint.png';
import ATSRelojProximidad from '../imagenes/ecommerce-productos/Cerraduras Electronicas ControlAcceso/ATS Reloj Proximidad.jpg';
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
import BisagraContinuaInox from '../imagenes/ecommerce-productos/Pivotes Bisagras/Bisagra Continua Inox.jpg';

/* Importar Redes Cableado Estructurado */
/* Camera887x488 */
import Camera887x488 from '../imagenes/ecommerce-productos/Redes Cableado Estructurado/camera-887x488.jpg';

/* Importar Salidas Push Emergencia */
/* BarraAntiPanicoBriton378 */
import BarraAntiPanicoBriton378 from '../imagenes/ecommerce-productos/Salidas Push Emergencia/Barra Anti Panico Briton-378.jpg';

/* Importar Sensores Huelgas Electronicas */
/* SeriesElectricStrikes */
import SeriesElectricStrikes from '../imagenes/ecommerce-productos/Sensores Huelgas Electronicas/45-Series-Electric-Strikes.jpg';

/* Importar Acceso Suspendido Alturas */
/* BMU540x272 */
import BMU540x272 from '../imagenes/ecommerce-productos/Acceso Suspendido Alturas/BMU-540x272.jpg';

/* Importar Mecanismos Suspension */
/* import  from '../imagenes/ecommerce-productos/Mecanismos Suspension/.png';*/

/**/

import next from '../imagenes/next.png';
import prev from '../imagenes/prev.png';

import styled from 'styled-components'

/* Style Carrousel */
const CarrouselStyle = styled.div`
    text-align: center;
    box-sizing: border-box;
`;

const CarrouselContainer = styled.div`
    display: block;
`;

/* Style  */

const CarrouselProductos = styled.div`
    display: inline;    
    float: left;
    top: auto; 
    right: auto; 
    bottom: auto; 
    left: auto; 
    z-index: auto; 
    width: 100%;
    height: auto; 
    margin: 0px; 
    overflow: auto;
`;

const CarrouselListaProducto = styled.div`
    display: inline - flex;
    max-width: 1000px;
    position: relative;
    margin: auto;
    position: sticky; /* absolute relative */
    overflow: auto;    
`;

const CarrouselProducto = styled.div`
    display: none;
    /* Fading animation */
    -webkit - animation - name: fade;
    -webkit - animation - duration: 1.5s;
    animation - name: fade;
    animation - duration: 1.5s;

    @-webkit - keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }

    @keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }
`;

const productoimg = styled.img`
    display: inline - flex;
    Width: auto;
    height: 100%;
`;

const Titulo = styled.div`
    color: #f2f2f2;
    font - size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100 %;
    text - align: center;
`;

const Precio = styled.div`
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
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
    
    :hover {
    background-color: #717171;
    }
`;

const Prev = styled.a` 
    cursor: pointer;
    position: absolute;
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

    :hover {
    background-color: rgba(0,0,0,0.8);
    }

`;

const Next = styled.a` 
    cursor: pointer;
    position: absolute;
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
    right: 0;
    border - radius: 3px 0 0 3px;
    
    :hover {
    background-color: rgba(0,0,0,0.8);
    }

`;


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
*/

/*const Carrousel = (props) => {*/
function Carrousel(props) {

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function PlusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function CurrentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i = ([]);
        var slides = document.getElementsByClassName("CarrouselProducto");
        var descripciones = document.getElementsByClassName("CarrouselDescripcion");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < descripciones.length; i++) {
            descripciones[i].className = descripciones[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        descripciones[slideIndex - 1].className += " active";
    }

    return (
        <CarrouselStyle key={i}>
            <CarrouselContainer>

                <CarrouselProductos>

                    <CarrouselListaProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={Fichaproducto} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={AMG100CFingerprint} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={ATSRelojProximidad} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={Handpunch1000} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={LCD701RD} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageAD400} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageCO100} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageCO220} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageConnectCentury} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageCSCamelot} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageLE} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageLectoresCTEMT15MT11} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageMultitechReaders} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageNDE} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageSEncode} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageSense} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageWP10354LE} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageCOSeries} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageAD400401Series} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageCO220Series} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageControlSeries} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageFSeriesHandPunch} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SchlageMultitechCredentials} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={BehavioralHealth} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={FalconSC60AL} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={BisagraContinuaInox} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={Camera887x488} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={BarraAntiPanicoBriton378} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={SeriesElectricStrikes} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                        <CarrouselProducto>
                            <Titulo />
                            <a href="/components/carrousel">
                                <productoimg src={BMU540x272} alt="" />
                            </a>
                            <Precio />
                        </CarrouselProducto>

                    </CarrouselListaProducto>

                    <Next id="Carrusel-next-imagenes-marcas" onclick="PlusSlides(1)">&#10095;>
                        <img src={next} alt="" />
                    </Next>
                    <Prev id="Carrusel-prev-imagenes-marcas" onclick="PlusSlides(-1)">&#10094;>
                        <img src={prev} alt="" />
                    </Prev>

                </CarrouselProductos>

                <CarrouselDescripcion id="carrusel_imagenes_marcas" >
                    <div style="text-align:center">
                        <span onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="CurrentSlide(2)"></span>
                        <span class="dot" onclick="CurrentSlide(3)"></span>
                    </div>
                </CarrouselDescripcion>

            </CarrouselContainer>
        </CarrouselStyle>
    )
};

export default connect(currentSlide, plusSlides, showSlides)(Carrousel);