import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const PerfilUsuarioContainer = styled.div`
  width: 100%;
	display: flex;
	justify-content: center;
`;

const ImageContainer = styled.div`
  width: 50%;
	height: auto;
`;

const Img = styled.div`
  width: 150px;
	height: 150px;
	border-radius: 50%;
	border: solid 1px midnightblue;
	background-size: cover;
	margin: 0 auto;
`;

const InfoContainer = styled.div`
  width: 50%;
`;

const NombreUsuario = styled.div`
  font-size: 46px;
  text-align: center;
  padding: 26px;
  color: #ae117c;
`;

const NumeroLikes = styled.div`
  font-size: 30px;
	color: #0d207b;
	font-family: Arial, Helvetica, sans-serif;
`;

const NumeroComentarios = styled.div`
  font-size: 30px;
	color: #0d207b;
`;

const PerfilUsuario = ({img, Nombre, Likes, Comentarios}) => {

    const ImageStyle = {
		backgroundImage: `url(${img})`
    }

	return (
        <PerfilUsuarioContainer>

			<ImageContainer>
                <Img style={ImageStyle}></Img>
            </ImageContainer>

            <InfoContainer>
                <NombreUsuario> {Nombre} </NombreUsuario>
                <NumeroLikes>Likes:  {Likes}  </NumeroLikes>
                <NumeroComentarios>Comentarios:  {Comentarios}  </NumeroComentarios>
            </InfoContainer>

        </PerfilUsuarioContainer>
	)
}

UserProfile.propTypes = {
	img: PropTypes.string.isRequired,
	Nombre: PropTypes.string.isRequired,
	Likes: PropTypes.Numero.isRequired,
	Comentarios: PropTypes.Numero.isRequired
}

export default PerfilUsuario;