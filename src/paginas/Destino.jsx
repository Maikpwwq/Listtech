import React from 'react'; 

import Nosotros from '../components/marca/Nosotros.jsx';
import Marcas from '../components/marca/Marcas.jsx';
import Productosyservicios from '../components/productos/Productos-y-servicios.jsx';
import ConoceMas from '../components/marca/ConoceMas.jsx';
import Carrusel from '../components/productos/Carrusel';

import styled from 'styled-components'

/* Style Main */
const MainStyle = styled.div`
    text-align: center;    
    box-sizing: border-box;   
`;

const MainContainer = styled.div`    

`;

const MainDark = styled.div`
    font - family: Arial, Helvetica, sans - serif;
    font-weight: 400;
    letter-spacing:1.2px;
    margins:5em 0 0 0;
    color:#ffffff;
    --styled - select - placeholder__color: #999;
    --styled - select__color: white;
    --styled - select__background - color: #555;
    --styled - select__border - color: black;
    --styled - select__border - width: 3px;
    --styled - select__border - radius: 5px;

    --styled - select - menu - outer__margin: 10px 0 0 0;
    --styled - select - menu - outer__padding: 0;
    --styled - select - menu - outer__background - color: #555;
    --styled - select - menu - outer__border - color: black;
    --styled - select - menu - outer__border - style: solid;
    --styled - select - menu - outer__border - width: 3px;

    --styled - select - option__background - color: #444;

    --styled - select - option__color--focused: #eee;
    --styled - select - option__background - color--focused: #333;

    --styled - select - option__color--selected: #eee;
    --styled - select - option__background - color--selected: #444;

    @media (max-width: 600px) {    
    -webkit-flex-direction: column;
    flex-direction: column;
    }

`;

/* Style the body Container for flexboxes */
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
const Maingrupo = styled.main`
    text-align: center;    
    margin: 0 auto;
    display: inline-block;
    padding: 0;
    width: 100%;
    background: #0575E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #021B79, #0575E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #021B79, #0575E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

const Mainrow = styled.div`
    display: grid;
    grid-template-columns: 360px auto 290px;    
`;

/*-webkit - columns: 260px 3; /* Chrome, Safari, Opera /
-moz - columns: 260px 3; /* Firefox /
columns: 260px 3;*/

/* Create three unequal columns that sits next to each other */
/* height Should be removed. Only for demonstration */
/* Left and right column */
/* Middle column */

/*.attrs(props => ({

    Side: { flex: 1 },    

    Middle: { flex: 2 },        

}))*/

const Maincolumns = styled.div`

    padding: 10px;
    height: 600px;     
`;

/*const Main = ({ children }) => (
    <MainStyle>
        {children}
    </MainStyle>    
);*/

const Destino = ( props ) => (
    <MainStyle>
        <MainContainer>
            <MainDark>
                <Maingrupo>

                    <Mainrow>

                        <Maincolumns>
                            <Productosyservicios />
                        </Maincolumns>

                        <Maincolumns>
                            <Carrusel />
                        </Maincolumns>

                        <Maincolumns>
                            <Marcas />
                        </Maincolumns>

                    </Mainrow>

                    <ConoceMas />
                    <Nosotros />

                </Maingrupo>     
            </MainDark>
        </MainContainer>
    </MainStyle>
);

export default Destino;