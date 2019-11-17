import React from 'react';
import styled from 'styled-components'

const NoEncontradoStyled = styled.div`
    text-align: center;
    box-sizing: border-box;
    display: block;
`;

const NoEncontradoContainer = styled.div`
    
`;

const NoEncontradoContent = styled.div`
    
`;

const NoEncontrado = () => (
    <NoEncontradoStyled>
        <NoEncontradoContainer>
            <NoEncontradoContent>
                <h3> No se encontro el contenido que busco, intente nuevamente redefiniendo los terminos de busqueda </h3>                
            </NoEncontradoContent>
        </NoEncontradoContainer>
    </NoEncontradoStyled>
);
          
export default NoEncontrado;