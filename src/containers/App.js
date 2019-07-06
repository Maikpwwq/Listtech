import React from 'react';
import '../css/App.css';
import Cuerpo from '../containers/Cuerpo.jsx';

/*import useGetData from '../hooks/useGetData';*/

/* Observar Index.css
 * import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body { 
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    /*-moz-osx-font-smoothing: grayscale; /
    background: #0f0c29; /* fallback for old browsers  /
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6  /
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+  /
    }
`;

/*
  titulo={data.titulo}
  foto={data.foto}
  marca={data.marca}
  descripcion={data.descripcion}
  garantia={data.garantia}
  precio={data.precio}
  solicitar={data.solicitar}


componentWillMount() {

}

componenteWillUnmount() {

}


    const data = useGetData();

return data.length === 0 ? <h1>Cargando ...</h1> :
<Cuerpo data={data.data}>

*/

const App = () => {


    return (
            <div className="App">
                    <Cuerpo>
                       
                    </Cuerpo>
            </div>
    );
}

/*<GlobalStyle>*/

export default App;