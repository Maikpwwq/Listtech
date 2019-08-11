import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
//import Textarea from './use/Textarea';
/*import '../css/Formcontacto.css';*/

import useSendForm from '../hooks/SendForm';
import { connect } from 'react-redux';

import { storage, database } from '../../init-firebase';

import styled from 'styled-components'

/* Style FromCont */
const FormContStyle = styled.div`
    padding: 3px 3px;
    font-size: 24px;
    font-weight: 360;
    font - family: Arial, Helvetica, sans - serif;
    letter-spacing:1.2px;
    margins:5px 0 0 0;
    text-align: center;    
    box-sizing: border-box;   
    height: auto;
    color: black;
    background: #232526;  
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #414345, #232526);  
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #414345, #232526); 
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const FormContacto = styled.form`
    vertical-align: bottom;
    width: 100%;
    height: 100%;
`;

const FormContheader = styled.div`
    padding: 6px 6px;
    font-size: 29px;
    font-weight: 390;
    text-align: center;    
    box-sizing: border-box;
    color: white;
`;

const FormContactoGrupo = styled.div`
    text-align: left;
    display: block;
    height:auto;
    width: 100%;
`;

const Textinput = styled.input`
    cursor: text;
    height:auto;
`;

const Titulo = styled.label`
    color: white;
    height:auto;
`;


//Form_contacto component
class Formcontacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Formulario de Contacto',
            titulo: 'Agregue un titulo',
            solicitud: 'cotizacion',
            nombre: 'Nombre',
            email: 'Ingrese una cuenta de correo valida',
            telefono: 'Su numero de contacto',
            mensaje: 'Especifique el requerimiento estaremos en contacto pronto',
            contactar: 'Enviar',
            SendForm: false,
        }
        this.SendForm = this.SendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);   
    }

    static defaultProps = {
        value: ''
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string
    }

    state = {
        value: this.props.value
    };   

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (name === "telefono") {
            if (!Number(value)) {
                alert("Tu numero telefónico deben ser números");
            }
        }
        // El evento altera los datos guardados 
        this.setState({
            [name]: value
        });
        console.log(this.state, 'Escribiendo ...');
    };    

    onChange = (event) => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date()) + '-' + file.name
        const uploadfile = storageRef.child(name).put(file);

        uploadfile
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => console.log(downloadURL));
            })
    };
    

    handleSubmit = ('submit',(event) => {
        event.preventDefault(); //Previene que el formulario recargue la pagina
        console.log(this.state, 'Enviando la data ...');
        alert('Se envio correctamente su solicitud: ' + this.state.value);         

        const SendForm = useSendForm();        
    });

    render() {

        const { SendForm } = this.state

        return (           
            <FormContStyle>
                <FormContacto
                    onSubmit={this.handleSubmit}
                    action="/Formcontacto"
                    method="post"
                >
                    {this.SendForm &&
                        <div><span>
                            !Guardado con exito!
                        </span></div>
                    }

                    {!this.SendForm &&
                    <FormContactoGrupo>
                        <FormContheader>
                            {this.state.title}
                        </FormContheader>
                        <Titulo>
                            Titulo del mensaje:
                        </Titulo>
                        <Textinput
                            type="text"
                            name="titulo"
                            value={this.state.titulo}
                            onChange={this.handleChange}
                            className="form-control"
                            //defaultValue=""
                            defaultChecked=""
                            placeholder="Title"                            
                        /><br /> 
                        <Titulo>
                            Solicitud:
                        </Titulo>
                        <select
                            name="solicitud"
                            value={this.state.solicitud}
                            onChange={this.handleChange}
                        >
                            <option value="pqrs">PQRS</option>
                            <option value="cotizacion">Cotizacio&#769;n</option>
                            <option value="otro">Otro</option>
                        </select> <br />
                        <Titulo>
                            Nombre:
                        </Titulo>
                        <Textinput
                            type="text"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                            className="form-control"                            
                            defaultChecked=""
                            placeholder="Registre su Nombre"
                        /> <br />
                        <Titulo>
                            Email: 
                        </Titulo>
                        <Textinput
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"                           
                            defaultChecked=""
                            placeholder="Ingrese su direccio&#769;n de email"
                        /><br />
                        <Titulo>
                            Nu&#769;mero de contacto:
                        </Titulo>
                        <Textinput
                            type="number"
                            name="telefono"
                            value={this.state.telefono}
                            onChange={this.handleChange}
                            className="form-control"                           
                            defaultChecked=""
                            placeholder="Ingrese su numero telefonico"
                        /><br />
                        <Titulo>
                            Requerimiento: 
                        </Titulo>
                        <Textinput
                            type="textarea"
                            rows="7"
                            cols="30"
                            name="mensaje"
                            value={this.state.mensaje}
                            onChange={this.handleChange}
                            className="materialize-textarea"                            
                            defaultChecked=""
                            placeholder="Ingrese una descripcion de su Requerimiento"
                        /><br />
                        <input type="file" onChange={this.onChange} name="file" />
                        <input
                            type="submit"
                            name="contactar"
                            value={this.state.contactar}
                            onChange={this.handleChange}
                            className="btn btn-primary"                            
                            defaultChecked=""
                            placeholder="Enviar"
                        />
                    </FormContactoGrupo>
                    }
                </FormContacto>
            </FormContStyle>
        )
    };
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Formcontacto);