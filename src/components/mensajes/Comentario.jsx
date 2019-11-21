import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const ComentariosContainerBox = styled.div`
    width: 100%;
	height: 270px;
	overflow: scroll;
`;

const ComentariosContainer = styled.div`
    width: 100%;
	padding: 10px;
	height: auto;
	display: flex;
	justify-content: center
`;

const ComentariosBox = styled.input`
    width: 90%;
	height: 40px;
	font-size: 20px;
	color: #0d207b;
	padding: 2px;
`;

const BtnComentar = styled.button`
    width: 10%;
	height: 40px;
	font-size: 21px;
	background: #7f147b;
	color: white;
	border: solid 1px white;
	border-radius: 3px;

    :hover{
	  cursor: pointer;
	  background-color: #af117c;
    }
`;

const Comentarios = styled.div`
  width: 100%;
	display: flex;
	justify-content: flex-start;
	opacity: 1;
  animation: fade 2s linear;
	align-items: center;

    @keyframes fade {
      0%,100% { opacity: 0 }
      100% { opacity: 1 }
    }

`;

const Usuario = styled.div`
  width: 35px;
	height: 35px;
	margin: 10px;
	border-radius: 50%;
	background-image: linear-gradient(359.694deg, rgb(218, 0, 113), rgb(27, 0, 197));
`;

const Texto = styled.div`
  font-size: 17px;
  font-weight: 600;
	color: darkblue;
`;


const Comentario = ({comentarios, addComentario, changeText, valueText}) => {

    const handleChange = (event) => {
		changeText(event.target.value)
    }

	const handleClick = () => {
		addComentario(valueText)
    }

    const ListaComentarios = comentarios.map((element, index) => {
        return (
			<Comentarios key={index}>
				<Usuario/>
                <Texto>{element.value}</Texto>
            </Comentarios>
		)
    })

	return (
		<ComentariosContainerBox>

            <ComentariosContainer>
                <ComentariosBox
					onChange={(e) => handleChange(e)}				 
					type="text" placeholder='escriba un comentario'
					value={valueText}
                ></ComentariosBox>
                <BtnComentar onClick={() => handleClick()}> > </BtnComentar>
            </ComentariosContainer>

            {ListaComentarios}

        </ComentariosContainerBox>
	)
}

Comentario.defaultProps = {
	valueInput: ''
}

Comentarios.propTypes = {
	addComentario: PropTypes.func.isRequired,
	comentarios: PropTypes.array.isRequired,
	changeText: PropTypes.func.isRequired
}

export default Comentario;