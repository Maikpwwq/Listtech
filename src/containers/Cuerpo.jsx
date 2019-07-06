import React from 'react'; 

import Footer from '../containers/Footer.jsx';

import Buscador from '../components/Buscador.jsx';
import Menu from '../components/Menu.jsx';
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

/* Style the header */
const Mainheader = styled.header`
    background - color: #0099cc;
    padding: 30px;    
    display: inline;
    text - align: center;
    font - size: 35px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
`;

/* Style the body Container for flexboxes */
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
const Maingrupo = styled.main`
    text-align: center;    
    margin: 0 auto;
    display: inline-block;
    padding: 0;
    width: 100%;
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
const Maincolumns = styled.div/*.attrs(props => ({

    Side: { flex: 1 },    

    Middle: { flex: 2 },        

}))*/`

    padding: 10px;
    height: 600px;     
`;

/* Style the footer */
const Mainfooter = styled.footer`
    background - color: #3c3c3c;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    height:auto;
    width: 100%;
`;

/*background - attachment: fixed;
background - attachment: local;
background - attachment: scroll;*/


/*const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    $ {props => props.primary && css`
       background: palevioletred;
       color: white; 
    `}
`;*/


/*const Main = ({ children }) => (
    <MainStyle>
        {children}
    </MainStyle>    
);*/

const Cuerpo = ( props ) => (
    <MainStyle>
        <MainDark>
            <Mainheader>
                <Buscador />
                <Menu titulo="Contenido" />
            </Mainheader>
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

                <Nosotros />
                <ConoceMas />

            </Maingrupo>
            <Mainfooter>
                <Footer />
            </Mainfooter>
        </MainDark>
    </MainStyle>
);

export default Cuerpo;