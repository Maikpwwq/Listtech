import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Textarea from './use/Textarea';
import '../css/Formcontacto.css';

import styled from 'styled-components'

/* Style FromCont */
const FormContStyle = styled.form`
    text-align: center;    
    box-sizing: border-box;   
    height: auto;
`;

const FormContacto = styled.div`
    vertical-align: bottom;
    width: 90%;
`;

const FormContheader = styled.div`
    text-align: center;    
    box-sizing: border-box;
    color: white;
`;

const FormContactoGrupo = styled.div`
    text-align: left;
    display: block;
    height:auto;
`;

const Textinput = styled.input`
    cursor: text;
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
            mensaje:'Especifique el requerimiento estaremos en contacto pronto',
            contactar: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
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
    // handleChange(e) {
        // const {}=;
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // El evento altera los datos guardados 
        this.setState({
            [name]: value
        });
        console.log(this.state, 'Escribiendo ...');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state, 'Enviando la data ...');
        alert('Se envio correctamente su solicitud: ' + this.state.value);
    }

    render() {
        return (
            <FormContStyle
                onSubmit={this.handleSubmit}
                action="/Formcontacto"
                method="post"
                >
                <FormContacto>
                    <FormContheader>
                        {this.state.title}
                    </FormContheader>
                    <FormContactoGrupo>
                        <label>
                            Titulo del mensaje:
                        </label>
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
                        <label>
                            Solicitud:
                        </label>
                        <select
                            name="solicitud"
                            value={this.state.solicitud}
                            onChange={this.handleChange}
                        >
                            <option value="pqrs">PQRS</option>
                            <option value="cotizacion">Cotizacio&#769;n</option>
                            <option value="otro">Otro</option>
                        </select> <br />
                        <label>
                            Nombre:
                        </label>
                        <Textinput
                            type="text"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                            className="form-control"                            
                            defaultChecked=""
                            placeholder="Registre su Nombre"
                        /> <br />
                        <label>
                            Email: 
                        </label>
                        <Textinput
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"                           
                            defaultChecked=""
                            placeholder="Ingrese su direccion de email"
                        /><br />
                        <label>
                            Nu&#769;mero de contacto:
                        </label>
                        <Textinput
                            type="number"
                            name="telefono"
                            value={this.state.telefono}
                            onChange={this.handleChange}
                            className="form-control"                           
                            defaultChecked=""
                            placeholder="Ingrese su numero telefonico"
                        /><br />
                        <label>
                            Requerimiento: 
                        </label>
                        <Textinput
                            type="textarea"
                            rows="7"
                            cols="30"
                            name="mensaje"
                            value={this.state.mensaje}
                            onChange={this.handleChange}
                            className="form-control"                            
                            defaultChecked=""
                            placeholder="Ingrese una descripcion de su Requerimiento"
                        /><br />
                        <input type="file" />
                        <input
                            type="submit"
                            name="contactar"
                            value="Enviar"
                            onChange={this.handleChange}
                            className="btn btn-primary"                            
                            defaultChecked=""
                            placeholder="Enviar"
                        />
                    </FormContactoGrupo>
                </FormContacto>
            </FormContStyle>
        )
    };
}

export default Formcontacto;