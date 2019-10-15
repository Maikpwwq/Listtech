import React, { Component } from 'react';

import logofacebook from '../../imagenes/redes/facebook.png';
import logoinstagram from '../../imagenes/redes/instagram.png';
import logotwitter from '../../imagenes/redes/twitter.png';
import logoyoutube from '../../imagenes/redes/youtube.png';
import logolinkedin from '../../imagenes/redes/linkedin.png'

import styled from 'styled-components'

const SocialStyled = styled.div`
    text-align: center;    
    box-sizing: border-box;
`;

const SocialHeader = styled.div`
    padding: 9px;
`;

const SocialRedes = styled.div`
    display: inblock;
    width: 100%;
    background: black;
    border-radius: 3px;
    padding: 6px 6px;
    margin: 1px 6px;
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
/*
const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

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
            title: 'SIGUENOS COMO:',
        }
    }

    render() {
        return (
            <SocialStyled>
                <SocialRedes>

                    <SocialHeader>
                        <strong>{this.state.title}<br /></strong>
                    </SocialHeader>

                    <Socialgrupo>
                        <SocialLista>

                            <SocialSiguenos>                                
                                <a href="https://www.instagram.com/list_tech"
                                    title="Instagram"
                                    className="Social-icono Social-icono--instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > <img src={logoinstagram} alt="Instagram" /> Instagram
                            </a></SocialSiguenos>

                            <SocialSiguenos>
                                <a href="http://twitter.com/"
                                    title="Twitter"
                                    className="Social-icono Social-icono--twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={logotwitter} alt="Twitter" /> Twitter
                            </a></SocialSiguenos>

                            <SocialSiguenos>                                
                                <a href="https://www.facebook.com/Listtech.seguridad.electronica/"
                                    title="Facebook"
                                    className="Social-icono Social-icono--facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={logofacebook} alt="Facebook" />Facebook
                            </a></SocialSiguenos>

                            <SocialSiguenos>                                
                                <a href="http://www.linkedin.com/"
                                    title="LinkedIn"
                                    className="Social-icono Social-icono--linkedin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={logolinkedin} alt="Linkedin" />Linked In
                            </a></SocialSiguenos>

                            <SocialSiguenos>
                                <a href="http://www.youtube.com/"
                                    title="Youtube"
                                    className="Social-icono Social-icono--youtube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={logoyoutube} alt="Youtube" />Youtube
                            </a></SocialSiguenos>
                    
                        </SocialLista>
                    </Socialgrupo>
                </SocialRedes>
            </SocialStyled>       
        );
    }
}

export default Social;
