import React from 'react';

import PiePagina from './Pie-pagina.jsx';
import Encabezado from './Encabezado.jsx';
// import Cuerpo from './Cuerpo.jsx';

import styled from 'styled-components'
import { createGlobalStyle, withTheme } from 'styled-components';

// Style PaginaDistribucion
const PaginaDistribucionStyle = styled.div`
    text-align: center;    
    box-sizing: border-box;   
`;

const GlobalStyle = createGlobalStyle`
    body { 
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans - serif; -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    letter-spacing:1.2px;
    margins:5em 0 0 0;
    
    -webkit-font-smoothing: antialiased;
    /*-moz-osx-font-smoothing: grayscale; /

    background: #0f0c29; /* fallback for old browsers  /
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6  /
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+  /
    }

    @media (max-width: 600px) {    
       -webkit-flex-direction: column;
       flex-direction: column;
    }
`;

// Dark Theme 
const PaginaDistribucionTheme = styled.div`
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
`;

const BtnTema = styled.button`
    
`;

const Tema = withTheme`
    color: ${props => props.temas.foreground};
    border: 2px solid ${props => props.temas.foreground};
    background: ${props => props.temas.background};
`;

const PaginaDistribucion = props => {

    const temas = {
        light: {
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            foreground: "#ffffff",
            background: "#222222"
        }
    };

    const TemaContexto = React.createContext(temas.light);

    function AlternarTema() {
        const Tema = useContext(TemaContexto);
    }

    return (
        <GlobalStyle>
            <TemaContexto.Provider value={temas.dark}>
                <div>
                    <BtnTema onclick={AlternarTema} 
                    > Alternar tema del sitio web
                    </BtnTema>
                </div>
                <PaginaDistribucionStyle>
                    <PaginaDistribucionTheme>
                        <Encabezado />

                        {props.children}

                        <PiePagina />
                    </PaginaDistribucionTheme>
                </PaginaDistribucionStyle>
            </TemaContexto.Provider>
        </GlobalStyle>        
    )
};

// <Cuerpo>
export default PaginaDistribucion;

// Borrador Guia de stylo 
/*
background - attachment: fixed;
background - attachment: local;
background - attachment: scroll;
*/

/* z - index only works on positioned elements
 * position: absolute 
 * position: relative
 * position: fixed
 * position: sticky*/

/* overflow: scroll; hidden; auto; visible; */

/* text - transform: uppercase; lowercase; capitalize */

/* 
    padding: 19px;
    font-size: 36px;
    font-weight: 390;
    text-align: center;
    font - family: Arial, Helvetica, sans - serif;
    letter-spacing:1.2px;
    margins:5em 0 0 0;
    color:#ffffff;   
 */

