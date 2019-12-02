import React from 'react';

// importar accion pagina Modal  
import { setModal } from '../actions/actions.js';
import useModal from '../hooks/useModal';

// Cargar Componentes
import Modal from '../components/micelaneos/Modal.jsx';
import Producto from '../../constantes/productos/Productos';
import FichaProducto from './Ficha-producto.jsx';

// Styled pagina detalle producto
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

    const { index, titulo, url, precio, marca, descripcion, garantia, solicitud } = Producto

    console.log('Ver a detalle', { Producto });
    
    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(!modal)
    }

    return (
        <DetalleProductoStyled>

            <DetalleProductoContainer>

                <DetalleProductoContent>

                    <Modal
                        show={modal}
                        close={showModal}>                       
                    </Modal>

                    <FichaProducto>

                        Ver a detalle

                    </FichaProducto>

                </DetalleProductoContent>

            </DetalleProductoContainer>

        </DetalleProductoStyled>
)};

const mapDispatchToProps = {
    setModal,
}

export default connect(null, mapDispatchToProps)(DetalleProducto);