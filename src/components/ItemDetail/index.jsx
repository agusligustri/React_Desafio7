import "./itemdetail.component.scss"
import { Modal } from 'react-bootstrap'

const ItemDetail = ( {product} ) => {
    console.log(product.id)
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title><p className="title">{product.title}</p></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={product.pictureUrl}></img>
                <p className="description">{product.description}</p>
            </Modal.Body>
        </>
    )
};

export default ItemDetail;