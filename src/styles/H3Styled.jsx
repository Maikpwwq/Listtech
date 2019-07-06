import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter.spacing: 0.2px;
    margin: 0.5em 0;
    color: #212121;
`;

const H3Styled = ({ name }) => <StyledH3> name </StyledH3>;

export default H3Styled;