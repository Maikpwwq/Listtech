import React, { Component } from 'react';

import styled from 'styled-components'

/* Style Blog */

const BlogContainer = styled.div`
    text-align: center;
    box-sizing: border-box;    
`;

class Blog extends Component {

    constructor(props) {
        super(props);

        this.estado = {

        };
    };

    render() {
        return (
            <BlogContainer> Cargando ...</BlogContainer>
               )
    };
};

export default Blog;