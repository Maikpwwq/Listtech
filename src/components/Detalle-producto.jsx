import React from 'react';
import styled from 'styled-components'

import FichaProducto from './Ficha-producto.jsx';
import { Productos } from '../productos/Productos';

const DetalleProductoStyled = styled.div`
    text-align: center;
    box-sizing: border-box;
    display: block;
`;

const DetalleProductoContainer = styled.div`
    
`;

const DetalleProductoContent = styled.div`
    
`;

const DetalleProducto = ({ Producto }) => {

    const { index, titulo, imagen, precio, marca, descripcion, garantia, solicitud } = Producto
    /*
    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(!modal)
    }

    <Modal
        show={modal}
        close={showModal}
    >
        {props.login ? <Registro />
            :
            <div className="Modal-login">
                <InicioSesion />
            </div>
        }
    </Modal>
    */
    return (
        <DetalleProductoStyled>

            <DetalleProductoContainer>

                <DetalleProductoContent>

                    <FichaProducto> Ver a detalle {Productos} </FichaProducto>

                </DetalleProductoContent>

            </DetalleProductoContainer>

        </DetalleProductoStyled>
)};


export default DetalleProducto;