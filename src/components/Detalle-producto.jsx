import React from 'react';

import FichaProducto from './Ficha-producto.jsx';
import Producto from '../productos/Productos';

import styled from 'styled-components'

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

    console.log('Ver a detalle', { Producto });
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

                    <FichaProducto> Ver a detalle </FichaProducto>

                </DetalleProductoContent>

            </DetalleProductoContainer>

        </DetalleProductoStyled>
)};


export default DetalleProducto;