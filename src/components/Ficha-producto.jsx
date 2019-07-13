import React from 'react';
import PropTypes from 'prop-types';

/*import '../css/Fichaproducto.css';*/

/*import React from 'react';*/
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



import styled from 'styled-components';

const StyledFicha = styled.div`
    align: center;
    box-sizing: border-box;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    display: inline;
`;


    /*display: none;*/
    /* Fading animation */
const FichaProducto = styled.div`
    -webkit - animation - name: fade;
    -webkit - animation - duration: 1.5s;
    animation - name: fade;
    animation - duration: 1.5s;
    border: 3px #f3f3f3 solid;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s linear;
    cursor: pointer;
    background-color: #f3f3f3;
    padding: 10px;
    min-width: 220px;
    display: block;
    text-align: left;
    margin: 0 auto;

    @-webkit - keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }

    @keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }
`;

const Productoimg = styled.img`
    Width: auto;
    height: 100%;
`;

const Titulo = styled.div`
    color: #0066cc;
    font - size: 21px;
    text-transform: uppercase; /* lowercase; capitalize */
    font-weight: bold;
    padding: 8px 12px;
    bottom: 8px;
    width: 100 %;
    text - align: center;
`;

const Fichaheader = styled.div`
    margin: 0;
    display:block;
    align: center,
    padding: 0;
    list-style-type: none;
`;

const IndexSpan = styled.span`
    text-align: right;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FichaDetalles = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;
    list-style-type: none;
`;

const FichaUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FichaLi = styled.li`
    display:inline;
    margin: 0 1em 0 0;
`;

const Precio = styled.div`
    color: #0066cc;
    position: relative;
    font-size: 19px;
    padding: 8px 12px;
    top: 0;
`;

const FichaproductoInteraccion = styled.div`
    display:block;
`;

const FichaproductoDescripcion = styled.div`
    display:block;
`;

/* {props.productos.map((producto, index) => ( */

const Fichaproducto = ({ Producto }) => {
    const { index, titulo, imagen, precio, marca, descripcion, garantia, solicitud } = Producto

    return(
        < StyledFicha >
            <FichaProducto id={`Ficha-${index}`} key="id" target="_blank">

                <Fichaheader>
                    <IndexSpan> {index + 1} </IndexSpan>
                    <Titulo>{titulo}</Titulo>                    
                    <Productoimg src={{imagen}} alt={'imagen'} />
                </Fichaheader>                

                <FichaDetalles>
                    <FichaUl>                
                        <FichaLi>

                            <Precio>{precio}</Precio>
                            <FichaproductoDescripcion>
                                <p> Marca: {marca}</p>
                                <p> Descripcion: {descripcion}</p>
                                <p> Garantia: {garantia}</p>
                            </FichaproductoDescripcion>

                            <FichaproductoInteraccion>
                                <span className="badge bagde-pill badge-danger ml-2">
                                    {solicitud}
                                </span>
                                <button className="btn btn-danger"
                                    > Agregar a compras
                                </button>
                            </FichaproductoInteraccion>                        

                        </FichaLi>                
                    </FichaUl>    
                    
                </FichaDetalles>

            </FichaProducto>
        </StyledFicha>
    )
}

Fichaproducto.propTypes = {
    Producto: PropTypes.object.isRequired
}

export default Fichaproducto;