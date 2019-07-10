import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter.spacing: 0.8px;
    margin: 1em 0 0 0;
    color: #C2185b;
`;

const H1Styled = ({ name }) => <StyledH1> name </StyledH1>;

export default H1Styled;