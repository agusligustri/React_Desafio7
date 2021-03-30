import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"; //as lo Renombra

const ItemCount = ({product}) => {
    const stock = product.stock;
    const [contador, setContador] = useState(0)
    const [addState, setAddState] = useState("d-flex")
    const [substractState, setSubstractState] = useState("d-none")

    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1);
            setAddState("d-flex")
            setSubstractState("d-flex")
        } else {
            setAddState("d-none")
            alert("No hay mas stock del producto");
        };
    };

    const onSubstract = () => {
        if (contador > 1) {
            setContador(contador - 1);
            setSubstractState("d-flex")
            setAddState("d-flex")
        } else {
            setContador(0);
            setSubstractState("d-none")
        }
    };

    return (
        <>
            <div className="input-group" style={{ width: '100%' }}>
                <div className="input-group-prepend">
                <button type="button" onClick={ () => {onSubstract()}} className={`${substractState} btn btn-outline-primary input-group-text`}> - </button>
                </div>
                <input type="text" placeholder={contador} className="form-control" style={{ height: '100%' }}></input>
                <div className="input-group-append">
                    <button type="button" onClick={ () => {onAdd(stock)}}  className={`${addState} btn btn-outline-primary input-group-text`}> + </button>
                </div>
            </div>

            <div>
                <Link to="/cart">
                    <button type="button" className="btn btn-success my-2" style={{ width: '100%' }}>Terminar la compra</button>
                </Link>
            </div>
        </>
    );
  }
  
  export default ItemCount;