import React from 'react';
import styled from 'styled-components'

const NotFoundStyled = styled.div`
    text-align: center;
    box-sizing: border-box;
    display: block;
`;

const NotFoundContainer = styled.div`
    
`;

const NotFoundContent = styled.div`
    
`;

const NotFound = () => (
    <NotFoundStyled>
        <NotFoundContainer>
            <NotFoundContent>
                <h3> NotFoundContent </h3>                
            </NotFoundContent>
        </NotFoundContainer>
    </NotFoundStyled>
);
          
export default NotFound;