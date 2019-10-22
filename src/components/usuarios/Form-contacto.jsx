import React, { Component } from 'react';
import { connect } from 'react-redux';

import { storage, database } from '../../init-firebase';

// importar acciones para formulario de contacto  
import useEnviarForm from '../../hooks/useEnviarForm';
import { setRequerimiento, setEnviarForm } from '../../actions/actions.js';

import PropTypes from 'prop-types';
//import Textarea from './use/Textarea';

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
        this.estado = {
            title: 'Formulario de Contacto',
            titulo: 'Agregue un titulo',
            solicitud: 'cotizacion',
            nombre: 'Nombre',
            email: 'Ingrese una cuenta de correo valida',
            telefono: 'Su numero de contacto',
            mensaje: 'Especifique el requerimiento estaremos en contacto pronto',
            contactar: 'Enviar',
            SendForm: false,
            value: this.props.value
        }        
        
        this.setEnviarForm = this.setEnviarForm.bind(this);
        this.estado.EnviarForm = this.estado.EnviarForm.bind(this);
        this.onCambios = this.onCambios.bind(this);
        this.onEnviar = this.onEnviar.bind(this);
        this.onCargar = this.onCargar.bind(this);           
    }

    static defaultProps = {
        value: ''
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string
    }

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
        this.setestado({
            [name]: value
        });
        console.log(this.estado, 'Escribiendo ...');
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
        console.log(this.estado, 'Enviando la data ...');
        alert('Se envio correctamente su solicitud: ' + this.estado.value);         

        const form = new FormData(event.target);
        const newDate = new Date().toISOString();
        // Llamado al Hook de Envio de Formulario de contacto
        const EnviarForm = useEnviarForm();

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
        
        // Empujar el requerimiento a la base de datos y asignar su verificacion
        database.ref('Requerimientos').push(requerimiento)
            .then(() => this.setEnviarForm(true))
            .catch(() => this.setEnviarForm(false))                

        // Resetear los valores en blanco
        //form.nombre.value = '',
        //form.email.value = '',            

    });

    render() {

        return (           
            <FormContStyle>
                <FormContactoContainer
                    onSubmit={this.onEnviar}
                    action="/Formcontacto"
                    method="post"
                >
                    {this.EnviarForm &&
                        <div><span>
                            !Guardado con exito!
                        </span></div>
                    }

                    {!this.EnviarForm &&
                    <FormContactoGrupo>
                        <FormContheader>
                            {this.estado.title}
                        </FormContheader>
                          <Titulo>
                            Titulo del mensaje:
                        </Titulo>
                        <Textinput
                            type="text"
                            name="titulo"
                            value={this.estado.titulo}
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
                            value={this.estado.solicitud}
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
                            value={this.estado.nombre}
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
                            value={this.estado.email}
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
                            value={this.estado.telefono}
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
                            value={this.estado.mensaje}
                            onChange={this.onCambios}
                            className="materialize-textarea"                            
                            defaultChecked=""
                            placeholder="Ingrese una descripcion de su Requerimiento"
                        /><br />
                        <input type="file" onChange={this.onCargar} name="file" />
                        <input
                            type="submit"
                            name="contactar"
                            value={this.estado.contactar}
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


const mapDispatchToProps = {
    setRequerimiento,
    setEnviarForm,
}

const mapestadoToProps = estado => {
    return {
        usuario: estado.usuario,
    }
}

export default connect(mapestadoToProps, mapDispatchToProps)(Formcontacto);