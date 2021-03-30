import ItemDetailContainer from "../../containers/ItemDetailContainer"
import ItemCount from "../ItemCount"

import "./item.component.scss"

const Item = ({ product } ) => {
    return (
        <div className="card col-lg-3 col-md-4 col-sm-6 col-12">
            <img className="card-img-top" src={product.pictureUrl}></img>
            <div className="card-body">
                <p className="card-title">{product.title} </p>
                <p className="card-price">Precio: ${product.price}</p>
                <p className="card-id">ID: {product.id}</p>
                <p className="card-stock">Stock: {product.stock}</p>
            </div>
{/*             <ItemCount stock={stock} contador={contador} onAdd={onAdd} onSubstract={onSubstract} />
 */}            <ItemCount product = {product} />
            <ItemDetailContainer product = {product} />
        </div>
    )
}

export default Item