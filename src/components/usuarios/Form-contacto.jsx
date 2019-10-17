import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
//import Textarea from './use/Textarea';

import useEnviarForm from '../../hooks/useEnviarForm';
import { connect } from 'react-redux';

import { storage, database } from '../../init-firebase';

import styled from 'styled-components'

/* Style FromCont */
const FormContStyle = styled.form`
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
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

const FormContactoContainer = styled.div`
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
        this.setSendForm = this.setSendForm.bind(this);
        this.state.SendForm = this.state.SendForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onCambios = (event) => {
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

    onCargar = (event) => {
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

    EnviarForm = useEnviarForm();

    onEnviar = ('submit',(event) => {
        event.preventDefault(); //Previene que el formulario recargue la pagina
        console.log(this.state, 'Enviando la data ...');
        alert('Se envio correctamente su solicitud: ' + this.state.value);         

        const form = new FormData(event.target);
        const newDate = new Date().toISOString();

        const requerimiento = {
            'date': newDate,
            'titulo': form.get('titulo'),
            'solicitud': form.get('solicitud'),
            'nombre': form.get('nombre'),
            'email': form.get('email'),
            'telefono': form.get('telefono'),
            'mensaje': form.get('mensaje'),
            'contactar': form.get('contactar'),
        }

        /*this.db.collection('requerimientos').get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                render(doc);
            })
        });*/

        storage.ref().child(this.db.collection('contactos').add({
            nombre: form.nombre.value,
            email: form.email.value,
            telefono: form.telefono.value,
        }));

        // Resetear los valores en blanco
        //form.nombre.value = '',
        //form.email.value = '',            

        // Empujar el requerimiento a la base de datos y asignar su verificacion
        database.ref('Requerimientos').push(requerimiento)
            .then(() => this.setEnviarForm(true))
            .catch(() => this.setEnviarForm(false))                
    });

    render() {

        return (           
            <FormContStyle>
                <FormContactoContainer
                    onSubmit={this.onEnviar}
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
                            onChange={this.onCambios}
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
                            onChange={this.onCambios}
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
                            onChange={this.onCambios}
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
                            onChange={this.onCambios}
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
                            onChange={this.onCambios}
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
                            onChange={this.onCambios}
                            className="materialize-textarea"                            
                            defaultChecked=""
                            placeholder="Ingrese una descripcion de su Requerimiento"
                        /><br />
                        <input type="file" onChange={this.onCargar} name="file" />
                        <input
                            type="submit"
                            name="contactar"
                            value={this.state.contactar}
                            className="form-control"                            
                            defaultChecked=""
                            placeholder="Ingrese una descripcion de su Requerimiento"
                        /><br />
                        <input type="file" />
                        <input
                            type="submit"
                            name="contactar"
                            value="Enviar"
                            onChange={this.onCambios}
                            className="btn btn-primary"                            
                            defaultChecked=""
                            placeholder="Enviar"
                        />
                    </FormContactoGrupo>
                    }
                </FormContactoContainer>
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