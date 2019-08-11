import React from 'react'; 

import Nosotros from '../components/Nosotros.jsx';
import Marcas from '../components/Marcas.jsx';
import Productosyservicios from '../components/Productos-y-servicios.jsx';
import ConoceMas from '../components/ConoceMas.jsx';
import Carrousel from '../components/Carrousel';

import styled from 'styled-components'

/* Style Main */
const MainStyle = styled.div`
    text-align: center;    
    box-sizing: border-box;   
`;

const MainContainer = styled.div`    
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

const Cuerpo = ( props ) => (
    <MainStyle>
        <MainContainer>
            <Maingrupo>

                <Mainrow>

                        <Maincolumns>
                            <Productosyservicios />
                        </Maincolumns>

                        <Maincolumns>
                            <Carrousel/>
                        </Maincolumns>

                        <Maincolumns>
                            <Marcas />
                        </Maincolumns>

                </Mainrow>

                <ConoceMas />
                <Nosotros />

            </Maingrupo>
        </MainContainer>
    </MainStyle>
);

export default Cuerpo;