import React, { Component } from 'react';
/*import '../css/Social.css';*/
/*import styled, { ThemeProvider } from 'styles-components';*/


import logofacebook from '../imagenes/redes/facebook.png';
import logoinstagram from '../imagenes/redes/instagram.png';
import logotwitter from '../imagenes/redes/twitter.png';
import logoyoutube from '../imagenes/redes/youtube.png';
import logolinkedin from '../imagenes/redes/linkedin.png'

import styled from 'styled-components'

const SocialStyled = styled.div`
    text-align: center;    
    box-sizing: border-box;
`;

const SocialHeader = styled.div`

`;

const SocialRedes = styled.div`
    display: inblock;
    width: 100%;
`;

const Socialgrupo = styled.div`
    display: inline;
`;

const SocialLista = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const SocialSiguenos = styled.li`
    text-align: center;    
    box-sizing: border-box;
    display: inline;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

/*
 const Color = {
      facebook:'#3B5998';
      twitter:'#38A1F3';
      linkedin:'#0E76A8';
      github:'#333';
      default:'#000000';
}

const GetColor= name => ({
    color: Color[name] || Color.default,
})
*/

/*const SocialIcono = styled.i`
    color:${props => props.theme.color}
    
`;
<ThemeProvider theme={GetColor(item.name)}>
<SocialIcono className={`fab fa-${item.name}`} /> 
</ThemeProvider>
*/

class Social extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Social',
        }
    }

    render() {
        return (
            <SocialStyled>
                <SocialRedes>

                    <SocialHeader>
                        <h3 className="Social-siguenos"
                        >Siguenos como </h3>
                    </SocialHeader>

                    <Socialgrupo>
                        <SocialLista>

                            <SocialSiguenos>
                                <img src={logoinstagram} alt="Instagram" />
                                <a href="https://www.instagram.com/list_tech"
                                    title="Instagram"
                                    class="Social-icono Social-icono--instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Instagram
                            </a></SocialSiguenos>

                            <SocialSiguenos><img src={logotwitter} alt="Twitter" />
                                <a href="http://twitter.com/"
                                    title="Twitter"
                                    className="Social-icono Social-icono--twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Twitter
                            </a></SocialSiguenos>

                            <SocialSiguenos>
                                <img src={logofacebook} alt="Facebook" />
                                <a href="https://www.facebook.com/Listtech.seguridad.electronica/"
                                    title="Facebook"
                                    className="Social-icono Social-icono--facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Facebook
                            </a></SocialSiguenos>

                            <SocialSiguenos>
                                <img src={logolinkedin} alt="Linkedin" />
                                <a href="http://www.linkedin.com/"
                                    title="LinkedIn"
                                    className="Social-icono Social-icono--linkedin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Linked In
                            </a></SocialSiguenos>

                            <SocialSiguenos><img src={logoyoutube} alt="Youtube" />
                                <a href="http://www.youtube.com/"
                                    title="Youtube"
                                    className="Social-icono Social-icono--youtube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Youtube
                            </a></SocialSiguenos>
                    
                        </SocialLista>
                    </Socialgrupo>
                </SocialRedes>
            </SocialStyled>       
        );
    }
}

export default Social;
