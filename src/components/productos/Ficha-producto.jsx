import React from 'react';
import PropTypes from 'prop-types';

import { storage, database } from '../../init-firebase';
import { connect } from 'react-redux';
import { addCompra } from '../../actions/actions'

import styled from 'styled-components';

const StyledFicha = styled.div`
    align: center;
    box-sizing: border-box;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    display: inline;
`;


    /*display: none;*/
    /* Fading animation */
const FichaProducto = styled.div`
    -webkit - animation - name: fade;
    -webkit - animation - duration: 1.5s;
    animation - name: fade;
    animation - duration: 1.5s;
    border: 3px #f3f3f3 solid;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s linear;
    cursor: pointer;
    background-color: #f3f3f3;
    padding: 10px;
    min-width: 220px;
    display: block;
    text-align: left;
    margin: 0 auto;

    @-webkit - keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }

    @keyframes fade {
        from { opacity: .4 }
        to { opacity: 1 }
    }
`;

const Productoimg = styled.img`
    Width: auto;
    height: 100%;
`;

const Titulo = styled.div`
    color: #0066cc;
    font - size: 21px;
    text-transform: uppercase; /* lowercase; capitalize */
    font-weight: bold;
    padding: 8px 12px;
    bottom: 8px;
    width: 100 %;
    text - align: center;
`;

const Fichaheader = styled.div`
    margin: 0;
    display:block;
    align: center,
    padding: 0;
    list-style-type: none;
`;

const IndexSpan = styled.span`
    text-align: right;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FichaDetalles = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;
    list-style-type: none;
`;

const FichaUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FichaLi = styled.li`
    display:inline;
    margin: 0 1em 0 0;
`;

const Precio = styled.span`
    color: #0066cc;
    position: relative;
    font-size: 19px;
    padding: 8px 12px;
    top: 0;
`;

const FichaproductoInteraccion = styled.div`
    display:block;
`;

const FichaproductoDescripcion = styled.div`
    display:block;
`;

/*   
 * 
 className="project-list section"
 className="card z-depth-0 project-summary"
 className="card-content grey-text text-darken-3"
 className="card-title"
 */

/*
 titulo={data.titulo}
  foto={data.foto}
  marca={data.marca}
  descripcion={data.descripcion}
  garantia={data.garantia}
  precio={data.precio}
  solicitar={data.solicitar}
 */
/*
 background: url(/imagenes/banners.png)
 */

const Fichaproducto = ({ Producto }) => {

    this.handleComprar = this.handleComprar.bind(this);

    const { id, index, titulo, imagen, precio, marca, descripcion, garantia, solicitud } = Producto

    // compras: [...this.state.compras, compra]
    
    this.handleComprar = (event) => {
        event.preventDefault();
        const compras = {};
        this.props.addCompra(this.state);
        this.props.onAddComprar(this.state);
        if (window.confirm('Deseas agregar este producto al carrito de compras')) {
            //this.setActive(!active)
            this.setState({
                comprar: this.state.compras.filter((event, i) => {
                    return i == index
                })
            })
        }
    };

    return (
        < StyledFicha >
            <FichaProducto
                id={`Ficha-${index}`}
                key={id}
                target="_blank"
            >

                <Fichaheader>
                    <IndexSpan> {index + 1} </IndexSpan>
                    <Titulo>{titulo}</Titulo>
                    <Productoimg
                        style={{ backgroung: `url('${imagen}')` }}
                        src={imagen}
                        alt={'imagen'} />
                </Fichaheader>

                <FichaDetalles className="project-list section">
                    <FichaUl>
                        <FichaLi>

                            <Precio className="badge bagde-pill badge-danger ml-2">
                                {precio} </Precio>
                            <FichaproductoDescripcion className="">
                                <p> Marca: {marca}</p>
                                <p> Descripcion: {descripcion}</p>
                                <p> Garantia: {garantia}</p>
                            </FichaproductoDescripcion>

                            <FichaproductoInteraccion>
                                <button className="btn btn-danger"
                                    onClick={this.handleComprar}
                                    onAddComprar={this.state.comprar}
                                > {solicitud} Agregar a compras
                                </button>
                            </FichaproductoInteraccion>                        

                        </FichaLi>                
                    </FichaUl>                        
                </FichaDetalles>

            </FichaProducto>
        </StyledFicha>
    )
};

Fichaproducto.propTypes = {
    Producto: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatchEvent) => {
    return {
        compra: (compra) => dispatchEvent(addCompra(compra)),
    }
};

export default connect(null, mapDispatchToProps)(Fichaproducto);