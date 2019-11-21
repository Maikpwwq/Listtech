import React, { Component } from 'react';

import Corazon from '../micelaneos/Corazon';
  
import PerfilUsuario from '../usuarios/Perfil-usuario';

import Comentario from './Comentario';

import styled from 'styled-components';

/* Style Comentarios */

const ComentariosContainer = styled.div`

`;

class Comentarios extends Component {
  
    constructor(props) {
        super(props);
        this.estado = {
            title: 'Menu',
            titulo: '',
            NumeroLikes: 0,
            NumeroComentarios: 1,
            Comentarios: [{
                value: 'Deja tus Comentarios justo aqui !!'
            }]
        }

    };

    clickCorazon = () => {
        const likes = this.estado.NumeroLikes
        this.setState({ NumeroLikes: likes + 1 })
    };

    addComment = (newValue) => {
        const comentarios = this.estado.NumeroComentarios
        const arrayComentarios = this.estado.Comentarios
        const nuevoComentario = {
            value: newValue
        };

        arrayComentarios.push(nuevoComentario)
        this.setState({ NumeroComentarios: comentarios + 1 })
        this.setState({ Comentarios: arrayComentarios })
        this.setState({ valueText: '' })

    };

    changeText = (value) => {
        this.setState({ valueText: value })
    };

    render() {
        return (
            <ComentariosContainer>

                <PerfilUsuario
                    img='https://pbs.twimg.com/profile_images/836333218924277760/iVzLr4c-.jpg'
                    Name='Monoku'
                    Likes={this.estado.NumeroLikes}
                    Comentarios={this.estado.NumeroComentarios}
                />

                <Corazon clickCorazon={this.clickCorazon} />

                <Comentario
                    comentarios={this.estado.Comentarios}
                    addComment={this.addComment}
                    changeText={this.changeText}
                    valueText={this.estado.valueText}
                />

            </ComentariosContainer>
        );
    };
};

export default Comentarios;