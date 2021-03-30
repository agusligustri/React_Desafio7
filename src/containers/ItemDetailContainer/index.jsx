import React, { useEffect, useState } from "react"
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import ItemDetail from "../../components/ItemDetail"


const ItemDetailContainer = ({product}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    }).then(() => {setShow(true);
    })};
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Mas Info
        </Button>
        <Modal show={show} onHide={handleClose}>
        <ItemDetail product={product}/>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
      </>
    );
};


export default ItemDetailContainer